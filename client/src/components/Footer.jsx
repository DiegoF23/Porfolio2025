import "../styles/AboutContact.css";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="site-footer">
      © {new Date().getFullYear()} {t.footer.copyright}
    </footer>
  );
}
