function generateCard() {
  const heading = document.getElementById("heading").value;
  const subheading = document.getElementById("subheading").value;
  const actionButton = document.getElementById("action-button").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const companyName = document.getElementById("company-name").value;
  const companyLogo = document.getElementById("company-logo").files[0];
  const templateImage = document.getElementById("template-image").files[0];
  const primaryColor = document.getElementById("primary-color").value;
  const secondaryColor = document.getElementById("secondary-color").value;

  const readerLogo = new FileReader();
  const readerTemplateImage = new FileReader();

  readerLogo.onload = function (e) {
    const logoURL = e.target.result;

    readerTemplateImage.onload = function (e) {
      const templateImageURL = e.target.result;

      const cardHTML = `
                <div class="card flex bg-white rounded-lg shadow-xl p-4 w-full max-w-lg h-[600px]" style="background-color: ${primaryColor}; color: ${secondaryColor};">
                    <div class="w-1/2 flex flex-col justify-between p-4">
                        <div class="flex items-center gap-3 mb-4">
                            <img class="company-logo w-12 h-12 rounded-full border p-2 cursor-pointer" src="${logoURL}" alt="Company Logo">
                            <span class="font-bold text-lg capitalize cursor-pointer">${companyName}</span>
                        </div>
                        <div>
                            <h2 class="text-xl font-bold mb-2">${heading}</h2>
                            <p class="text-md mb-4">${subheading}</p>

                            
                        </div>
                        <div class="flex flex-col gap-3">
                            <p class="text-md flex gap-2 items-center"><span><i class="fa-solid fa-globe text-white"></i></span> ${email}</p>
                            <p class="text-md flex gap-2 items-center mb-4"> <span><i class="fa-solid fa-phone text-white"></i></span> ${phone}</p>
                           
                        </div>
                        <a href="./demo.html" class="bg-blue-600 text-white px-4 py-2 rounded-xl text-center">${actionButton}</a>
                    </div>
                    <div class="w-1/2">
                        <img src="${templateImageURL}" alt="Template Image" class="w-full h-full object-cover rounded-md">
                    </div>
                </div>
            `;

      const storedCards = JSON.parse(localStorage.getItem("cards")) || [];
      storedCards.push(cardHTML);
      localStorage.setItem("cards", JSON.stringify(storedCards));

     
      document.getElementById("template-form").reset();

      window.location.href = "template.html";
    };

    readerTemplateImage.readAsDataURL(templateImage);
  };

  readerLogo.readAsDataURL(companyLogo);
}
