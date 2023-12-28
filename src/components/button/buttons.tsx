import { Link } from 'react-router-dom';

type buttonDetaail = {
  buttontext?: string;
  link?: any;
  className?: string;
};

const ButtonPrimaryDarkNormal = (props: buttonDetaail) => {
  return (
    <Link to={props.link}>
      <button
        className={`px-[33px] py-[10px] bg-primary hover:bg-button hover:drop-shadow-2xl text-white hover:text-primary transition duration-500 ${props.className}`}
      >
        {props.buttontext}
      </button>
    </Link>
  );
};
const ButtonPrimaryLightNormal = (props: buttonDetaail) => {
  return (
    <Link to={props.link}>
      <button
        className={`px-[33px] py-[10px] bg-white hover:bg-button drop-shadow-xl hover:drop-shadow-2xl text-primary hover:text-primary transition duration-500 ${props.className}`}
      >
        {props.buttontext}
      </button>
    </Link>
  );
};
const ButtonSecondaryDarkNormal = (props: buttonDetaail) => {
  return (
    <Link to={props.link}>
      <button
        className={`px-[33px] py-[10px] bg-transparent border-[1.9px] border-primary hover:border-button  text-primary hover:text-button transition duration-500 ${props.className}`}
      >
        {props.buttontext}
      </button>
    </Link>
  );
};
const ButtonSeconcaryLightNormal = (props: buttonDetaail) => {
  return (
    <Link to={props.link}>
      <button
        className={`px-[33px] py-[10px] bg-transparent border-[1.9px] border-white text-white hover:border-button   hover:text-button transition duration-500 ${props.className}`}
      >
        {props.buttontext}
      </button>
    </Link>
  );
};

const ButtonSeconcaryLightNormal1 = (props: buttonDetaail) => {
  return (
    <Link to={props.link}>
      <button {...props} className={`mx-5 ${props.className}`}>
        {props.buttontext}
      </button>
    </Link>
  );
};

export {
  ButtonPrimaryDarkNormal,
  ButtonPrimaryLightNormal,
  ButtonSecondaryDarkNormal,
  ButtonSeconcaryLightNormal,
  ButtonSeconcaryLightNormal1,
};
