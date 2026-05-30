// Manages 10-day follow-up cycles for all contacted leads

function runFollowUpCycle() {
  logInfo('Starting follow-up cycle');
  const sent = sendFollowUpEmails();
  logInfo(`Follow-up cycle complete — ${sent} follow-ups sent`);
  return sent;
}

// Returns a summary of all leads overdue for follow-up (for manual review)
function getFollowUpSummary() {
  const fu1 = getLeadsForFollowUp(1);
  const fu2 = getLeadsForFollowUp(2);

  const summary = {
    followUp1Due: fu1.length,
    followUp2Due: fu2.length,
    details: [
      ...fu1.map(l => ({ ...l, followUpType: 'Follow-up 1' })),
      ...fu2.map(l => ({ ...l, followUpType: 'Follow-up 2' })),
    ],
  };

  Logger.log(`Follow-up summary: FU1=${fu1.length}, FU2=${fu2.length}`);
  return summary;
}

// Returns all leads that have been contacted but haven't replied
function getStaleLeads() {
  const leads    = getAllLeads();
  const stale    = [];
  const cutoff   = CONFIG.FOLLOW_UP_DAYS * (CONFIG.MAX_FOLLOW_UPS + 1);

  leads.forEach(lead => {
    if (lead.overallStatus === 'Contacted') {
      const sent = lead.email1SentDate;
      if (sent && daysBetween(sent) > cutoff) {
        stale.push(lead);
      }
    }
  });

  return stale;
}

// Archives leads with no response after all follow-ups
function archiveDeadLeads() {
  const stale   = getStaleLeads();
  let archived  = 0;

  stale.forEach(lead => {
    if (lead.fu2Status === 'Sent' || lead.fu2Status === 'Pending') {
      updateLeadField(lead.id, COL.OVERALL_STATUS, 'Lost');
      archived++;
    }
  });

  logInfo(`Archived ${archived} unresponsive leads`);
  return archived;
}

// Called when a lead replies (manually or via webhook) to stop further follow-ups
function markLeadReplied(leadId, notes) {
  updateLeadField(leadId, COL.OVERALL_STATUS, 'Interested');
  updateLeadField(leadId, COL.FU1_STATUS,     'Replied');
  updateLeadField(leadId, COL.FU2_STATUS,     'Skip');
  if (notes) updateLeadField(leadId, COL.NOTES, notes);
  logInfo(`Lead ${leadId} marked as Replied`);
}

// Called when a meeting is booked
function markMeetingBooked(leadId, meetingDate) {
  updateLeadField(leadId, COL.OVERALL_STATUS, 'Meeting Booked');
  if (meetingDate) {
    updateLeadField(leadId, COL.NOTES, `Meeting booked: ${meetingDate}`);
  }
  logInfo(`Lead ${leadId} marked as Meeting Booked`);
}
