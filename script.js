// function sendMail(){
//     let parms = {
//         name: document.getElementById("name").value,
//         email: document.getElementById("email").value,
//         subject: document.getElementById("subject").value,
//         message: document.getElementById("message").value,
//     }

//     emailjs.send("service_lmziw88","template_cijdahb",parms).then(function(_response) {
//         // Clear input fields
//         document.getElementById("name").value = "";
//         document.getElementById("email").value = "";
//         document.getElementById("subject").value = "";
//         document.getElementById("message").value = "";

//         // Show success message
//         alert("Email has been sent!!");
//     })
//     .catch(function(error) {
//         // Handle errors if the email fails to send
//         alert("There was an error sending the email: " + error);
//     });
// }

function sendMail() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    if (name && email && subject && message) {
        let parms = {
            name: name,
            email: email,
            subject: subject,
            message: message,
        };

        emailjs.send("service_lmziw88", "template_cijdahb", parms)
            .then(function (_response) {
                // Clear input fields
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("subject").value = "";
                document.getElementById("message").value = "";

                // Show success message
                alert("Email has been sent!!");
            })
            .catch(function (error) {
                // Handle errors if the email fails to send
                alert("There was an error sending the email: " + error);
            });
    } else {
        // Notify the user to fill in all fields
        alert("Please fill in all fields before sending the email.");
    }
}
