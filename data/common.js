// Shared functions across all pages.

// base URL of our JIRA
var jiraUrl = "https://issues.apache.org/jira/browse/"

// Returns the JIRA url for a given string starting with [REEF-XXX]
function get_jira_url(htmlString){
    var trimmed = htmlString.trim();
    var endOfIssueId = trimmed.indexOf("]");
    var issueId = trimmed.slice(1, endOfIssueId);
    return jiraUrl + issueId;
}