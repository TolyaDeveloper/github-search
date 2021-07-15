import React, { useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { useGithub } from '../../context/github/githubContext'

import styles from './UserCard.module.scss'
import Loader from '../Loader/Loader';

const UserCard = ({match}) => {
  const {getUser, getRepos, loading, user, repos} = useGithub()
  const urlName = match.params.name

  useEffect(() => {
    getUser(urlName)
    getRepos(urlName)
    // eslint-disable-next-line
  }, [])

  if (loading) {
    return <Loader />
  }

  const {
    name, company, avatar_url, location, bio, blog, login, html_url,
    followers, following, public_repos, public_gists
  } = user

  return (
    <article>
      <Link className={styles.backLink} to="/">
        <svg className={styles.backLinkIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"/></svg>
        <span className={styles.backLinkSpan}>Return to home page</span>
      </Link>
      <div className={styles.userCard}>
        <div>
          <img className={styles.userCardAvatar} src={avatar_url} alt={name} />
          <h2 className={styles.userCardName}>{name}</h2>
          {location && <p>Location: {location}</p>}
        </div>
        <div>
          {
            bio &&
              <>
                <h3 className={styles.userCardBioTitle}>BIO</h3>
                <p className={styles.userCardBioText}>{bio}</p>
              </>
          }
          <a className={styles.userCardGithubLink} href={html_url} target="_blank" rel="noopener noreferrer">Open in Github</a>
          <ul className={styles.userCardAboutList}>
            {
              login &&
                <li className={styles.userCardAboutItem}>
                  <strong>Username: </strong>{login}
                </li>
            }
            {
              company &&
              <li className={styles.userCardAboutItem}>
                <strong>Company: </strong>{company}
              </li>
            }
            {
              blog &&
              <li className={styles.userCardAboutItem}>
                <strong>Website: </strong>{blog}
              </li>
            }
          </ul>
          <ul className={styles.userCardStatsList}>
            <li className={`${styles.userCardStatsItem} ${styles.userCardSubscribers}`}>Subscribers: {followers}</li>
            <li className={`${styles.userCardStatsItem} ${styles.userCardSubscribed}`}>Subscribed: {following}</li>
            <li className={`${styles.userCardStatsItem} ${styles.userCardRepos}`}>Repositories: {public_repos}</li>
            <li className={`${styles.userCardStatsItem} ${styles.userCardGists}`}>Gists: {public_gists}</li>
          </ul>
        </div>
      </div>
      {repos.map(repo => (
        <div key={repo.id} className={styles.repoInner}>
          <ul>
            <li className={styles.repoItem}>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
            </li>
          </ul>
        </div>
      ))}
    </article>
  )
}

export default withRouter(UserCard)