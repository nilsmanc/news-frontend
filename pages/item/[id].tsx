import instance from '../../axios'

const Info = ({ newsItem }) => {
  return (
    <>
      <h2>{newsItem.title}</h2>
      <div>{newsItem.text}</div>
    </>
  )
}

export default Info

export const getServerSideProps = async ({ params }) => {
  const { id } = params

  const { data } = await instance.get(`/news/${id}`)

  return { props: { newsItem: data } }
}
