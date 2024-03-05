import {useBillingUser} from '../use-billing-user';
import {FormattedDate} from '../../../i18n/formatted-date';
import {BillingPlanPanel} from '../billing-plan-panel';
import {Trans} from '../../../i18n/trans';
import {FormattedPrice} from '../../../i18n/formatted-price';
import {Button} from '../../../ui/buttons/button';
import {Link} from 'react-router-dom';

export function ActivePlanPanel() {
  const {subscription} = useBillingUser();
  if (!subscription?.price || !subscription?.product) return null;

  const renewDate = (
    <FormattedDate preset="long" date={subscription.renews_at} />
  );

  return (
    <BillingPlanPanel title={<Trans message="Current plan" />}>
      <div className="mt-24 flex justify-between gap-20">
        <div>
          <div className="mb-2 text-xl font-bold">
            {subscription.product.name}
          </div>
          <FormattedPrice className="mb-2 text-xl" price={subscription.price} />
          <div className="text-base">
            <Trans
              message="Your plan renews on :date"
              values={{date: renewDate}}
            />
          </div>
        </div>
        <div className="w-[233px]">
          <Button
            variant="flat"
            color="primary"
            size="md"
            className="mb-12 w-full"
            elementType={Link}
            to="/billing/change-plan"
            disabled={subscription.gateway_name === 'none'}
          >
            <Trans message="Change plan" />
          </Button>
          <Button
            variant="outline"
            color="danger"
            size="md"
            className="w-full"
            elementType={Link}
            to="/billing/cancel"
          >
            <Trans message="Cancel plan" />
          </Button>
        </div>
      </div>
    </BillingPlanPanel>
  );
}
