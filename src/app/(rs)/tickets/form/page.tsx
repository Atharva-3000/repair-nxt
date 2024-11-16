import { getCustomer } from "@/lib/queries/getCustomer";
import { getTicket } from "@/lib/queries/getTicket";
import { BackButton } from "@/components/BackButton";
import * as Sentry from "@sentry/nextjs";

export default async function TicketFormPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | undefined }>
}) {
    try {
        const { customerid, ticketid } = await searchParams;
        if (!customerid && !ticketid) {
            return (
                <>
                    <h2 className="text-2xl mb-2">
                        Ticket ID or Customer ID required to load ticket form.
                    </h2>
                    <BackButton title="Go Back" variant="default" />
                </>
            )
        }
        //  new ticket form
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
            if (!customer.active) {
                return (
                    <>
                        <h2 className="text-2xl mb-2">
                            Customer ID #{customerid} is not Active!
                        </h2>
                        <BackButton title="Go Back" variant="default" />
                    </>
                )
            }
            // return ticket form
        }
        if (ticketid) {
            const ticket = await getTicket(parseInt(ticketid));
            if (!ticket) {
                return (
                    <>
                        <h2 className="text-2xl mb-2">
                            Ticket ID #{ticketid} not found
                        </h2>
                        <BackButton title="Go Back" variant="default" />
                    </>
                )
            }
            // return ticket form


            const customer = await getCustomer(ticket.customerId);

            // return form
            console.log("ticket: ", ticket);
            console.log("customer: ", customer);
        }


    } catch (e) {
        if (e instanceof Error) {
            Sentry.captureException(e);
            throw e;
        }
    }
}