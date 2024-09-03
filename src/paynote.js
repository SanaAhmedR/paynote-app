import React, { useEffect } from "react";

const PaynoteButton = ({
  customerEmail,
  firstName,
  lastName,
  widgetSelector,
}) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://developers.seamlesschex.com/docs/checkoutjs/sdk-min.js";
    script.async = true;
    script.defer = true;
    script.onload = () => {
      try {
        const objRequestIframe = {
          publicKey: "pk_test_01H8PVPA6Y7T7TBHPNJHYHKZ2C",
          sandbox: true,
          displayMethod: "iframe",
          paymentToken: "pay_tok_SPECIMEN-" + Math.random(),
          widgetContainerSelector: widgetSelector,
          saveBankDetails: true,
          storeName: "AlphaBetaGamma",
          checkout: {
            totalValue: 3,
            currency: "USD",
            description: "Sign up to System",
            items: [{ title: "Enrollment", price: 3 }],
            customerEmail: customerEmail,
            customerFirstName: firstName,
            customerLastName: lastName,
          },
          style: {
            buttonClass: "btn green-btn btn-block no-overflow",
            buttonColor: "#00b660",
            buttonLabelColor: "#ffffff",
            buttonLabel: "Pay",
          },
          onSuccess: function () {
            console.log("Payment successful!");
          },
          onError: function () {
            console.log("Error during payment");
          },
        };
        const paynoteIframe = new window.PAYNOTE(objRequestIframe);
        paynoteIframe.render();
      } catch (error) {
        alert("Error initializing PAYNOTE: " + error.message);
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [customerEmail, firstName, lastName, widgetSelector]);

  return <div className={`${widgetSelector}`}></div>;
};

export default PaynoteButton;
