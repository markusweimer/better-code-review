// Content script loaded into https://github.com/apache/reef/pulls


// Rewrite an entry of the PR list by adding a link to the JIRA
function append_jira_url(index, html){
    return "<a href=\"" + get_jira_url(html) + "\">JIRA</a>";
}


$( ".issue-title-link" )
    // Append the JIR URL
    .append(append_jira_url)
    ;