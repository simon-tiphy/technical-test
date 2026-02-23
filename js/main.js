/**
 * Main application scripts
 * Implements basic DOM interactivity per assessment requirements (custom accordion, modal validation).
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Membership Accordion Interactivity
  const membershipHeaders = document.querySelectorAll(".membership-header");

  membershipHeaders.forEach((header) => {
    header.addEventListener("click", (event) => {
      event.preventDefault();

      // Get target ID and element from data attribute
      const targetId = header.getAttribute("data-target");
      const targetBody = document.getElementById(targetId);
      const icon = header.querySelector(".toggle-icon");

      if (!targetBody) return;

      // Check state
      const isOpen = targetBody.classList.contains("is-open");

      // Option: Uncomment below to auto-close other accordions if desired
      // closeAllAccordions();

      if (!isOpen) {
        // Open it
        targetBody.classList.add("is-open");
        header.setAttribute("aria-expanded", "true");
        if (icon) icon.classList.add("rotate-180");
      } else {
        // Close it
        targetBody.classList.remove("is-open");
        header.setAttribute("aria-expanded", "false");
        if (icon) icon.classList.remove("rotate-180");
      }
    });
  });

  // Helper to close all accordions (if strictly exclusive behavior is needed)
  function closeAllAccordions() {
    membershipHeaders.forEach((h) => {
      const bodyId = h.getAttribute("data-target");
      const bodyEl = document.getElementById(bodyId);
      const icn = h.querySelector(".toggle-icon");

      if (bodyEl) bodyEl.classList.remove("is-open");
      h.setAttribute("aria-expanded", "false");
      if (icn) icn.classList.remove("rotate-180");
    });
  }

  // 2. Simple Form Validation & Modal Submission
  const detailsForm = document.getElementById("detailsForm");
  const formSubmitBtn = document.getElementById("formSubmitBtn");
  const formSuccessAlert = document.getElementById("formSuccessAlert");

  if (detailsForm) {
    detailsForm.addEventListener(
      "submit",
      (e) => {
        e.preventDefault(); // Prevent standard page reload

        // Trigger HTML5 validation check
        if (!detailsForm.checkValidity()) {
          e.stopPropagation();
          detailsForm.classList.add("was-validated");
          return; // Stop if invalid
        }

        // Valid state: Proceed with UX for submission
        detailsForm.classList.add("was-validated");

        // UI Feedback: Loading state
        const originalBtnContent = formSubmitBtn.innerHTML;
        formSubmitBtn.disabled = true;
        formSubmitBtn.innerHTML =
          '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Processing...';

        // Simulate API latency
        setTimeout(() => {
          // Reset button state
          formSubmitBtn.disabled = false;
          formSubmitBtn.innerHTML = originalBtnContent;

          // Hide inputs and show success message
          detailsForm.style.display = "none";
          detailsForm.classList.remove("was-validated");
          detailsForm.reset();

          formSuccessAlert.classList.remove("d-none");
          formSuccessAlert.classList.add("d-flex");

          // Delay before closing modal completely
          setTimeout(() => {
            const modalElement = document.getElementById("inquiryModal");
            const modalInstance = bootstrap.Modal.getInstance(modalElement);
            if (modalInstance) {
              modalInstance.hide();
            }

            // Pre-reset for next modal open
            setTimeout(() => {
              detailsForm.style.display = "block";
              formSuccessAlert.classList.add("d-none");
              formSuccessAlert.classList.remove("d-flex");
            }, 500);
          }, 2000);
        }, 1000); // 1 second fake network delay
      },
      false,
    );
  }
});
