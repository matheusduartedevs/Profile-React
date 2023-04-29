import styles from "./styles.module.css"

export default function Profile({ avatar, name, bio, email, phone, githubUrl, linkedinUrl, twitterUrl }) {
    return (
        <div className={styles.container}>
            <img className={styles.avatar} src={avatar}/>
            <h2 className={styles.name}>{name}</h2>
            <p>{bio}</p>
            <p>{phone}</p>
            <p>{email}</p>
            <div className={styles.links}>
                <button>{githubUrl}</button>
                <button>{linkedinUrl}</button>
                <button>{twitterUrl}</button>
            </div>
        </div>
    )
}