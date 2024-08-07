const social_links = [
    {
        link: 'https://www.linkedin.com/company/cygnuspayments',
        target: '_blank',
        icon: 'fab fa-linkedin',
        color: 'tp-f-linkedin',
    },
    {
        link: 'https://www.instagram.com/cygnuspayments',
        target: '_blank',
        icon: 'fab fa-instagram',
        color: 'tp-f-instagram',
    },
    // {
    //   link: "http://facebook.com",
    //   target: "_blank",
    //   icon: "fab fa-facebook-f",
    //   color: "tp-f-fb",
    // },
    // {
    //   link: "https://www.skype.com/en/",
    //   target: "_blank",
    //   icon: "fab fa-skype",
    //   color: "tp-f-skype",
    // },
]

const SocialLinks = () => {
    return (
        <>
            {social_links.map((l, i) => (
                <a
                    key={i}
                    href={l.link}
                    className={l.color}
                    target={l.target ? l.target : ''}
                >
                    <i className={l.icon}></i>
                </a>
            ))}
        </>
    )
}

export default SocialLinks
