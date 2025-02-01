import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/pro-solid-svg-icons/faHeart";

interface IconProps {
  /** Do not add screenreader-only text to the icon. */
  noSrText?: boolean;
}

interface FavoriteIconProps extends IconProps {
  /** Favorite-status has been marked as true. */
  isFavorite?: boolean;
}

export const FavoriteIcon: React.FC<FavoriteIconProps> = (props) => {
  const color = props.isFavorite ? "#a82a2a" : undefined;
  const srText = props.noSrText ? null : (
    <span>{props.isFavorite ? "Favorited" : "Not favorited"}</span>
  );

  return (
    <>
      <FontAwesomeIcon icon={faHeart} color={color} />
      {srText}
    </>
  );
};
