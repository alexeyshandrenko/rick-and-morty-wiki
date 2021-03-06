import PropTypes from "prop-types";

import Characters from "../../components/Characters/Characters";
import Loading from "../../components/ui/loading/Loading";
import Wallpaper from "../../components/ui/wallpaper/Wallpaper";

import useGetCharacters from "../../hooks/characters/useGetCharacters";

const CharactersPage = ({ title }) => {
  const { data, loading } = useGetCharacters();

  return (
    <>
      <Wallpaper title={title} />
      <main>
        <div className="container">
          {loading && <Loading />}
          {data && (
            <Characters
              charactersData={data}
              charactersLoading={loading}
              pagesCount={data?.characters?.info?.pages}
              next={data?.characters?.info?.next}
            />
          )}
        </div>
      </main>
    </>
  );
};

CharactersPage.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CharactersPage;
