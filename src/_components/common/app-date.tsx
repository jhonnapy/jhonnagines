import dayjs from 'dayjs';
import React, { FunctionComponent, useMemo } from 'react';

export type AppDateProps = {
  dateTime: string;
  format?: string;
};

const AppDate: FunctionComponent<AppDateProps> = ({
  dateTime,
  format = 'DD-MMM-YYYY',
}) => {
  const formattedDate = useMemo(
    () => dayjs(dateTime).format(format),
    [dateTime, format]
  );
  return <time dateTime={formattedDate}>{formattedDate}</time>;
};

export default AppDate;
