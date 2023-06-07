import * as Styled from './style';

import { AlertResponse } from '@/types/alert';
import { YYMMDD } from '@/utils/date';

interface AlertProps {
  alerts: AlertResponse[] | undefined;
}

const Alert = (props: AlertProps) => {
  const { alerts } = props;

  if (!alerts)
    return (
      <p>
        알림을 불러오지 못했습니다.
        <br />
        다시 시도해주세요!
      </p>
    );

  if (alerts.length === 0) return <p>알림이 없습니다.</p>;

  return (
    <>
      {alerts.map(alert => (
        <Styled.AlertModalListItems key={alert.id}>
          <p>{alert.message}</p>
          <br />
          <Styled.AlertInfo>
            {alert.major}/{YYMMDD(alert.created_at)}
          </Styled.AlertInfo>
        </Styled.AlertModalListItems>
      ))}
    </>
  );
};

export default Alert;
