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
                <div class="card flex bg-blue-900 rounded-lg shadow-xl p-4" style="background-color: ${primaryColor}; color: ${secondaryColor};">
                    <div class="w-1/2 flex flex-col gap-5 p-4">
                        <div class="flex items-center gap-3">
                            <img class="company-logo w-14 h-14 rounded-full border p-2 cursor-pointer" src="${logoURL}" alt="Company Logo">
                            <span class="font-bold text-lg capitalize cursor-pointer">${companyName}</span>
                        </div>
                        <div>
                            <h2 class="text-4xl font-bold mb-2 w-[60%] mb-4">${heading}</h2>
                            <p class="text-xl w-[70%] text-white mb-4">${subheading}</p>

                            
                        </div>
                        <div class="flex flex-col gap-3">
                            <p class="text-md flex gap-2 items-center"><span><i class="fa-solid fa-globe text-white"></i></span> ${email}</p>
                            <p class="text-md flex gap-2 items-center mb-4"> <span><i class="fa-solid fa-phone text-white"></i></span> ${phone}</p>
                           
                        </div>
                      <button class="bg-black text-white px-5 py-3 rounded-2xl text-center">${actionButton}</button>

                        </div>

                        <div class="image-frames w-1/2">
                          <div class="image-frame overflow-hidden relative">
                          <img src="${templateImageURL}" alt="Template Image" class=" template-img w-full h-full object-cover rounded-md">
                          </div>
                          <div class="image-frame">
                           </div>
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
