import { useEffect } from 'react';
import { useAppContext } from '../context/appContext';
import Loading from './Loading';
import Job from './Job';
import Wrapper from '../assets/wrappers/JobsContainer';

const JobsContainer = () => {
	const { getJobs, jobs, isLoading, page, totalJobs } = useAppContext();

	useEffect(() => {
		getJobs();
	}, []);

	if (isLoading) {
		return <Loading center text={'Fetching Jobs....'} />;
	}

	if (jobs.length === 0) {
		return (
			<Wrapper>
				<h2>No jobs found..</h2>
			</Wrapper>
		);
	}

	return (
		<Wrapper>
			<h5>
				{totalJobs} job{jobs.length > 1 && 's'} find
			</h5>

			<div className='jobs'>
				{jobs.map((job) => {
					return <Job key={job._id} {...job} />;
				})}
			</div>
			{/* pagination btn */}
		</Wrapper>
	);
};
export default JobsContainer;
