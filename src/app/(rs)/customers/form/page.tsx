import { BackButton } from "@/components/BackButton";
import { getCustomer } from "@/lib/queries/getCustomer";
import * as Sentry from "@sentry/nextjs";

export default async function CustomerFormPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | undefined }>
}) {
    try {

        const { customerid } = await searchParams;
        console.log(JSON.stringify({ customerid }));
        // edit customer form
        if (customerid) {
            const customer = await getCustomer(parseInt(customerid));

            if (!customer) {
                return (
                    <>
                        <h2 className="text-2xl mb-2">
                            Customer ID #{customerid} not found
                        </h2>
                        <BackButton title="Go Back" variant="default" />
                    </>
                )
            }
            // form component
            console.log(customer);
        } else {
            // new customer form component (same)
        }

    } catch (e) {
        if (e instanceof Error) {
            Sentry.captureException(e);
            throw e;
        }
    }
}