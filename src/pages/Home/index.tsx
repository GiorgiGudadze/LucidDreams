import { useQuery } from "react-query";
import MultipleSelect from "../../components/MultipleSelect";
import { fetchAPI } from "../../services/API";
import { filterUniqueById } from "../../services/helper";

const Home = () => {
  const { data, isLoading, isError } = useQuery("apiData", fetchAPI);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  const filteredData = filterUniqueById(data);

  return <div>{<MultipleSelect data={filteredData} />}</div>;
};

export default Home;
