import './footer.scss'

interface SocialIconType {
    socialicontype: SocialIconProps[]
}

export const FooterI = ({ socialicontype }: SocialIconType) => {
    return (
        <footer>
            <div className="social">
                <div className="social__group">
                    <h2>SRMIST SIGKDD STUDENT CHAPTER</h2>
                </div>
            </div>
        </footer>
    )
}
