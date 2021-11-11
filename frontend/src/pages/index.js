import Layout from '../hocs/Layout';

const homePage = () => {
  return (
      <Layout
        title='httpOnly Auth | Home'
        content='Home page for auth using httpOnly Cookies with json web tokens'
      >
        <div className='p-5 bg-light rounded-3'>
          <div className='container-fluid py-3'>
              <h1 className='display-5 fw-bold'>Home Page</h1>
              <p className='fs-4 mt-3'>
                Welcome to the httpOnly Cookie Authentication
              </p>
          </div>
        </div>
      </Layout>
    )
};
export default homePage;