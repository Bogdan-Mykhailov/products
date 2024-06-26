import React, {ReactNode} from 'react';

interface Props {
  children: ReactNode;
}

const RootLayout = ({children}: Props) => {

  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
