export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor" style={{ padding: "20px", fontFamily: "Arial", maxWidth: "600px" }}>
        <h3>Assignment Name</h3>
        <input id="wd-name" value="A1 - ENV + HTML" style={{ width: "100%" }} /><br /><br />
  
        <textarea
          id="wd-description"
          rows={7}
          style={{ width: "100%" }}
          defaultValue={`The assignment is available online
  Submit a link to the landing page of your Web application running on Netlify.
  The landing page should include the following:
  - Your full name and section
  - Links to each of the lab assignments
  - Link to the Kambaz application
  - Links to all relevant source code repositories
  The Kambaz application should include a link to navigate back to the landing page.`}
        /><br /><br />
  
        <label htmlFor="wd-points">Points</label><br />
        <input id="wd-points" value={100} style={{ width: "100%" }} /><br /><br />
  
        <label htmlFor="wd-group">Assignment Group</label><br />
        <select id="wd-group" style={{ width: "100%" }}>
          <option value="ASSIGNMENTS">ASSIGNMENTS</option>
        </select><br /><br />
  
        <label htmlFor="wd-display-grade-as">Display Grade as</label><br />
        <select id="wd-display-grade-as" style={{ width: "100%" }}>
          <option value="Percentage">Percentage</option>
        </select><br /><br />
  
        <label htmlFor="wd-submission-type">Submission Type</label><br />
        <select id="wd-submission-type" style={{ width: "100%" }}>
          <option value="Online">Online</option>
        </select><br />
  
        <p>Online Entry Options</p>
        <div style={{ paddingLeft: "15px" }}>
          <label><input type="checkbox" id="wd-text-entry" /> Text Entry</label><br />
          <label><input type="checkbox" id="wd-website-url" /> Website URL</label><br />
          <label><input type="checkbox" id="wd-media-recordings" /> Media Recordings</label><br />
          <label><input type="checkbox" id="wd-student-annotation" /> Student Annotation</label><br />
          <label><input type="checkbox" id="wd-file-upload" /> File Uploads</label><br />
        </div><br />
  
        <label htmlFor="wd-assign-to">Assign to</label><br />
        <input id="wd-assign-to" value="Everyone" style={{ width: "100%" }} /><br /><br />
  
        <label htmlFor="wd-due-date">Due</label><br />
        <input id="wd-due-date" type="date" defaultValue="2024-05-13" style={{ width: "100%" }} /><br /><br />
  
        <label>Available from</label><br />
        <input id="wd-available-from" type="date" defaultValue="2024-05-06" />
        &nbsp;&nbsp;
        <label>Until</label>
        <input id="wd-available-until" type="date" defaultValue="2024-05-20" /><br /><br />
  
        <button style={{ marginRight: "10px" }}>Cancel</button>
        <button>Save</button>
      </div>
    );
  }
  