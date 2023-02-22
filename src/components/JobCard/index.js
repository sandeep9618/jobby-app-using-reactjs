import {Link} from 'react-router-dom'
import {AiFillStar} from 'react-icons/ai'
import {MdLocationOn} from 'react-icons/md'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import './index.css'

const JobCard = props => {
  const {jobData} = props
  const {
    companyLogoUrl,
    employmentType,
    jobDescription,
    id,
    location,
    rating,
    title,
    packagePerAnnum,
  } = jobData
  return (
    <Link to={`/jobs/${id}`} className="link-item">
      <li className="job-item-bg-container">
        <div className="company-logo-and-title-container">
          <img
            src={companyLogoUrl}
            alt="company logo"
            className="company-logo"
          />
          <div>
            <h1 className="role">{title}</h1>
            <div className="rating-container">
              <AiFillStar className="rating-star" color="gold" size={20} />
              <p className="rating-para">{rating}</p>
            </div>
          </div>
        </div>

        <div className="location-and-salary-package-container">
          <div className="location-and-salary-contaainer">
            <div className="location-container">
              <MdLocationOn size={25} color="white" />
              <p className="location">{location}</p>
            </div>
            <div className="location-container">
              <BsFillBriefcaseFill size={25} color="white" />
              <p className="location">{employmentType}</p>
            </div>
          </div>
          <p className="package">{packagePerAnnum}</p>
        </div>
        <hr className="hr-line-jobs" />
        <h1 className="description-heading">Description</h1>
        <p className="job-description">{jobDescription}</p>
      </li>
    </Link>
  )
}

export default JobCard
