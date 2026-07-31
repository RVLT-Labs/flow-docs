import type {ReactNode} from 'react';
import Footer from '@theme-original/DocItem/Footer';
import type FooterType from '@theme/DocItem/Footer';
import type {WrapperProps} from '@docusaurus/types';
import HelpfulWidget from '@site/src/components/HelpfulWidget';

type Props = WrapperProps<typeof FooterType>;

// Wraps every guide article with a "Was this helpful?" prompt ahead of the
// standard tags/edit-link/last-updated footer — a help-center convention
// (Intercom, Sprig) a reference-docs sidebar tree doesn't normally have.
export default function FooterWrapper(props: Props): ReactNode {
  return (
    <>
      <HelpfulWidget />
      <Footer {...props} />
    </>
  );
}
