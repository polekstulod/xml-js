function loadXMLDoc() {
  let xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      empDetails(this);
    }
  };

  xmlhttp.open("GET", "data/applicant_db.xml", true);
  xmlhttp.send();
}

function empDetails(xml) {
  let xmlDoc = xml.responseXML;
  let table = `<tr>
              <th>ID</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>City</th>
              <th>Country</th>
              <th>Birthday</th>
              <th>Employer</th>
              <th>Salary</th>
              <th>Remarks</th
              ><th>Record Date</th>
        </tr>`;
  let x = xmlDoc.getElementsByTagName("applicant");

  for (let i = 0; i < x.length; i++) {
    let email =
      x[i].getElementsByTagName("email")[0].childNodes[0] === undefined
        ? ""
        : x[i].getElementsByTagName("email")[0].childNodes[0].nodeValue;
    let employer =
      x[i].getElementsByTagName("employer")[0].childNodes[0] === undefined
        ? ""
        : x[i].getElementsByTagName("employer")[0].childNodes[0].nodeValue;

    table +=
      "<tr><td>" +
      x[i].getElementsByTagName("id")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("full_name")[0].childNodes[0].nodeValue +
      "</td><td>" +
      email +
      "</td><td>" +
      x[i].getElementsByTagName("gender")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("city")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("country")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("birthday")[0].childNodes[0].nodeValue +
      "</td><td>" +
      employer +
      "</td><td>" +
      x[i].getElementsByTagName("salary")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("remarks")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("record_date")[0].childNodes[0].nodeValue +
      "</td></tr>";
  }

  document.getElementById("id").innerHTML = table;
}
