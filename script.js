function getFormvalue() {
    //Write your code here
	 const fname = document.forms[0]["fname"].value.trim();

	 const lname = document.forms[0]["lname"].value.trim();

     const fullName = fname + " " + lname;

     alert(fullName.trim());

}
