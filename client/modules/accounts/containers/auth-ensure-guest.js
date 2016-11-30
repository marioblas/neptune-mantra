import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import authComposer from '../libs/auth-composer';
import AuthEnsureGuest from '../components/auth-ensure-guest';

const composer = ({ context, loggedIn, loggedInRoute }, onData) => {
  const { FlowRouter } = context();
  if (loggedIn && loggedInRoute) {
    FlowRouter.go(loggedInRoute);
  }
  onData(null, {});
};

export const depsMapper = context => ({
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  composeWithTracker(authComposer),
  useDeps(depsMapper),
)(AuthEnsureGuest);
