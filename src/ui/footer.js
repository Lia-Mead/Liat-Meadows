import github from "../assets/images/github.svg";

const Footer = () => {
    return (
        <div className="footer">
            <div>© Made with ♡ by Liat Meadows 2023</div>
            <a
                className="link-con"
                href="https://github.com/Lia-Mead"
                target="_blank"
                rel="noreferrer"
            >
                <img className="icon" src={github} alt="github" />
                gitHub
            </a>
            <p>
                <a href="mailto:meadowsliat@gmail.com">liatmeadows@gmail.com</a>
            </p>
        </div>
    );
};

export default Footer;
