import React from "react";
import { Helmet } from 'react-helmet';

const TermsPage = () => {
  return (
    <div className="policy-container" style={{ padding: "2rem", lineHeight: "1.6" }}>
      <Helmet>
        <title>Terms & Conditions | The Shan Booth</title>

        <meta
          name="description"
          content="Terms and Conditions for The Shan Booth photobooth hire services in Melbourne, including bookings, payments, cancellations, and responsibilities."
        />

        <link
          rel="canonical"
          href="https://www.photoboothwithshan.com.au/terms"
        />

        <meta name="robots" content="index, follow, noimageindex" />
      </Helmet>

      <h1>Terms and Conditions</h1>
      <p><strong>Last Updated:</strong> August 13, 2025</p>
      <p>
        Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the 
        <a href="https://www.photoboothwithshan.com.au/" target="_blank" rel="noopener noreferrer"> www.photoboothwithshan.com.au</a> website 
        and the photo booth rental services (the "Service") operated by The Shan Booth ("us", "we", or "our").
      </p>
      <p>
        Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. 
        These Terms apply to all visitors, users, and others who access or use the Service.
      </p>
      <p>
        By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, 
        then you may not access the Service.
      </p>

      <h2>1. Services Offered</h2>
      <p>The Shan Booth provides photo booth rental services for various events, including but not limited to weddings, birthdays, corporate events, and private parties ("Events"). Our services include:</p>
      <ul>
        <li>Rental of photo booth equipment.</li>
        <li>Delivery, setup, and dismantling of the photo booth.</li>
        <li>On-site attendant, props, custom print templates, digital copies of photos/videos, online gallery.</li>
        <li>Other core services as specified in your booking.</li>
      </ul>

      <h2>2. Booking and Payment</h2>
      <ul>
        <li><strong>Quotations:</strong> All quotations provided by The Shan Booth are valid for 7 days from the date of issue.</li>
        <li><strong>Booking Confirmation:</strong> To confirm a booking, clients must send a confirmation email. After receiving your confirmation, we will issue an invoice for the required deposit or full payment according to the agreed package.</li>
        <li><strong>Payment Methods:</strong> We accept payments via bank transfer, PayId, credit card, PayPal. All payments must be made in AUD.</li>
      </ul>

      <h2>3. Cancellations and Refunds</h2>
      <ul>
        <li><strong>Cancellation by Client:</strong> 
          <ul>
            <li>If a booking is cancelled more than 30 days prior to the Event date, the non-refundable deposit will be forfeited.</li>
            <li>If a booking is cancelled between 14 and 30 days prior to the Event date, 50% of the total fee will be due.</li>
            <li>If a booking is cancelled less than 14 days prior to the Event date, the full amount will be due and no refund will be issued.</li>
          </ul>
        </li>
        <li><strong>Rescheduling:</strong> Subject to availability and may incur additional fees. Any deposit or payment made for a cancelled event may be transferred to a new date within 6 months of the original event date.</li>
        <li><strong>Cancellation by The Shan Booth:</strong> In the unlikely event we must cancel due to unforeseen circumstances, we will provide a full refund of all monies paid. No additional compensation is provided.</li>
      </ul>

      <h2>4. Client Responsibilities</h2>
      <ul>
        <li><strong>Venue and Space Requirements:</strong> The Client is responsible for ensuring the venue provides:
          <ul>
            <li>A flat, stable, dry surface.</li>
            <li>Access to a standard power outlet within 5 meters of the setup location.</li>
            <li>Sufficient space for the photo booth setup, props, and guest queue (minimum 3m x 3m area).</li>
            <li>Protection from direct sunlight, rain, wind, or extreme temperatures if outdoors.</li>
          </ul>
        </li>
        <li><strong>Access and Setup:</strong> The Client must ensure clear entry and exit points. Delays due to inaccessible venues may reduce rental time.</li>
        <li><strong>Supervision:</strong> Client or designated representative must supervise guests and ensure proper use of the photo booth.</li>
        <li><strong>Damage to Equipment:</strong> Client is responsible for any loss or damage to equipment or props caused by guests, negligence, or misuse. Repair or replacement costs apply.</li>
      </ul>

      <h2>5. Photo and Video Content Usage</h2>
      <ul>
        <li><strong>Ownership:</strong> All photos and videos captured remain the property of The Shan Booth.</li>
        <li><strong>Client Use:</strong> Clients receive digital copies for personal, non-commercial use.</li>
        <li><strong>Promotional Use:</strong> Unless agreed otherwise, The Shan Booth may use photos/videos for promotional purposes. Notify us in writing if you opt-out.</li>
      </ul>

      <h2>6. Limitation of Liability</h2>
      <p>The Shan Booth shall not be liable for indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, goodwill, or other intangible losses. Our total liability is limited to the amount paid for the specific booking.</p>

      <h2>7. Indemnification</h2>
      <p>You agree to indemnify The Shan Booth and its employees, contractors, and affiliates against any claims, losses, or expenses arising from:</p>
      <ul>
        <li>Your use of the Service.</li>
        <li>Any breach of these Terms.</li>
        <li>Violation of any law or third-party rights.</li>
      </ul>

      <h2>8. Intellectual Property</h2>
      <p>The Service and its original content are the exclusive property of The Shan Booth and its licensors. Trademarks and trade dress may not be used without prior written consent.</p>

      <h2>9. Governing Law</h2>
      <p>These Terms are governed by the laws of Victoria, Australia. If any provision is invalid, the remaining provisions remain effective. These Terms constitute the entire agreement between us regarding the Service.</p>

      <h2>10. Changes to These Terms</h2>
      <p>We may modify these Terms at any time. Material changes will be communicated with at least 30 days' notice. Continued use of the Service constitutes acceptance of revised terms.</p>

      <h2>11. Contact Us</h2>
      <p>If you have any questions about these Terms, please contact us:</p>
      <ul>
        <li>Email: <a href="mailto:theshanbooth@gmail.com">theshanbooth@gmail.com</a></li>
        <li>Contact Page: <a href="https://www.photoboothwithshan.com.au" target="_blank" rel="noopener noreferrer">photoboothwithshan.com.au</a></li>
        <li>Phone: +61 475 116 521</li>
      </ul>
    </div>
  );
};

export default TermsPage;
