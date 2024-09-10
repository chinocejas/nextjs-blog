import ReactGA from 'react-ga';

export const initGA = () => {
  try{
    ReactGA.initialize(process.env.NEXT_PUBLIC_GA_TRACKING_KEY);
  }catch(error){
    console.error('error to initialize GA')
  };
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

export const logEvent = ({ category = '', action = '', label = '' }) => {
  if (category && action) {
    ReactGA.event({ category, action, label });
  }
};