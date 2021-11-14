import { Fragment } from "react";
import Link from "next/link";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import ReceiptIcon from "@mui/icons-material/Receipt";
import BusinessIcon from "@mui/icons-material/Business";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <Fragment>
      <div className="footerMainDiv dFlexWrap justfyeven">
        <div>
          <p>
            <AccountBalanceIcon />
            <Link href="/cancellation_refund_policy">
              <a> Cancellation &amp; Refund Policy</a>
            </Link>
          </p>
          <p>
            <PrivacyTipIcon />
            <Link href="/privacy_policy">
              <a> Privacy Policy</a>
            </Link>
          </p>
          <p>
            <ReceiptIcon />
            <Link href="/terms_conditions">
              <a> Terms &amp; Conditions</a>
            </Link>
          </p>
        </div>
        <div>
          <p>
            <BusinessIcon /> Vasant Kunj, New Delhi, India
          </p>
          <p>
            <PhoneIcon />
            <Link href="tel:+917055335905">
              <a> +91-7055335905</a>
            </Link>
          </p>
          <p>
            <EmailIcon />
            <Link href="mailto:blashio@gmail.com">
              <a> blashio@gmail.com</a>
            </Link>
          </p>
        </div>
      </div>
      <div className="textCenter">
        <p>www.blashio.com</p>
        <p>&copy; 2021 Blashio</p>
      </div>
    </Fragment>
  );
};

export default Footer;
