import "react";
import { Container, A } from "../";

type Social = "instagram" | "facebook" | "linkedin" | "github";

const social_link = (user: string, social: Social) =>
  `https://${social}.com/${user}`;

function icon(social: string) {
  switch (social) {
    case "facebook":
      return "fab fa-facebook-square";
    case "link":
      return "far fa-link";
    default:
      return `fab fa-${social}`;
  }
}

export const SocialIcon = (props: any) => {
  const { style, social, ...rest } = props;
  return (
    <Container {...rest} style={{ ...style }}>
      <i className={icon(social)}></i>
    </Container>
  );
};

export const SocialLink = (props: any) => {
  const { style, social, user, ...rest } = props;
  return (
    <A href={social_link(user, social)} {...rest} style={{ ...style }}>
      <SocialIcon social={props.social} />
    </A>
  );
};
