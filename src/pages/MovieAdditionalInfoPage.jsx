import {
  MovieAdditionalInfoPageWrapper,
  MovieAdditionalInfoPageUl,
  MovieAdditionalInfoPageLink,
} from './MovieAdditionalInfoPage.styled';

const links = [
  {
    to: 'cast',
    title: 'Cast',
  },
  {
    to: 'reviews',
    title: 'Reviews',
  },
];

export const MovieAdditionalInfoPage = () => {
  return (
    <MovieAdditionalInfoPageWrapper>
      <div>Additional information</div>
      <MovieAdditionalInfoPageUl>
        {links.map(({ to, title }) => (
          <li key={title}>
            <MovieAdditionalInfoPageLink to={to} replace>
              {title}
            </MovieAdditionalInfoPageLink>
          </li>
        ))}
      </MovieAdditionalInfoPageUl>
    </MovieAdditionalInfoPageWrapper>
  );
};
