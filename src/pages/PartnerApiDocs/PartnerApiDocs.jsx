import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiAlertCircle,
  FiArrowUpRight,
  FiCheck,
  FiCheckCircle,
  FiChevronRight,
  FiCode,
  FiCopy,
  FiExternalLink,
  FiKey,
  FiLock,
  FiMail,
  FiPackage,
  FiRefreshCw,
  FiServer,
  FiShield,
  FiTruck,
} from "react-icons/fi";

import { MdOutlineWebhook } from "react-icons/md";


import "./PartnerApiDocs.css";

const navigationItems = [
  {
    id: "overview",
    label: "Overview",
  },
  {
    id: "access",
    label: "Getting access",
  },
  {
    id: "authentication",
    label: "Authentication",
  },
  {
    id: "create-order",
    label: "Create an order",
  },
  {
    id: "list-orders",
    label: "List orders",
  },
  {
    id: "profile",
    label: "Partner profile",
  },
  {
    id: "webhooks",
    label: "Webhooks",
  },
  {
    id: "errors",
    label: "Errors",
  },
  {
    id: "support",
    label: "Support",
  },
];

const createOrderFields = [
  {
    field: "recipientName",
    type: "string",
    required: true,
    description: "Full name of the person receiving the parcel.",
  },
  {
    field: "recipientPhone",
    type: "string",
    required: true,
    description:
      "Kenyan mobile number in 07, 01, 254 or +254 format.",
  },
  {
    field: "description",
    type: "string",
    required: false,
    description:
      "A short description of the parcel or customer order.",
  },
  {
    field: "weight",
    type: "number",
    required: false,
    description:
      "Parcel weight in kilograms. The default value is 1.",
  },
];

const orderStatuses = [
  {
    status: "at_terminal",
    meaning:
      "Order logged and waiting for assignment or collection.",
  },
  {
    status: "dispatched",
    meaning:
      "A Relayer has been assigned and is heading to the pickup point.",
  },
  {
    status: "picked_up",
    meaning:
      "The parcel has been collected from the partner.",
  },
  {
    status: "in_transit",
    meaning:
      "The parcel is on its way to the customer.",
  },
  {
    status: "delivered",
    meaning:
      "The parcel has been handed over to the customer.",
  },
];

const errorCodes = [
  {
    code: "400",
    title: "Bad Request",
    meaning:
      "Required information is missing or invalid.",
  },
  {
    code: "401",
    title: "Unauthorized",
    meaning:
      "The API key is missing, invalid or inactive.",
  },
  {
    code: "429",
    title: "Too Many Requests",
    meaning:
      "The request rate is too high. Retry after a delay.",
  },
  {
    code: "500",
    title: "Server Error",
    meaning:
      "Relay could not complete the request.",
  },
];

const authenticationCode = `# Base URL
https://relay.co.ke/api

# Every request
curl https://relay.co.ke/api/partner/me \\
  -H "x-api-key: YOUR_API_KEY"`;

const createOrderRequestCode = `curl -X POST https://relay.co.ke/api/partner/orders \\
  -H "x-api-key: YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "recipientName": "Amina Hassan",
    "recipientPhone": "0712345678",
    "description": "2x chicken burger combo",
    "weight": 1.5
  }'`;

const createOrderResponseCode = `{
  "success": true,
  "waybill": "RLY-8K2NQ4TP",
  "orderId": "a1b2c3d4-...",
  "message": "Order logged. Customer will receive SMS with waybill RLY-8K2NQ4TP"
}`;

const listOrdersRequestCode = `curl https://relay.co.ke/api/partner/orders \\
  -H "x-api-key: YOUR_API_KEY"`;

const listOrdersResponseCode = `{
  "orders": [
    {
      "id": "a1b2c3d4-...",
      "waybillNumber": "RLY-8K2NQ4TP",
      "recipientName": "Amina Hassan",
      "recipientPhone": "+254712345678",
      "description": "2x chicken burger combo",
      "status": "at_terminal",
      "pickupOtp": "4821",
      "createdAt": "2026-07-12T14:03:22.000Z"
    }
  ],
  "total": 1
}`;

const profileRequestCode = `curl https://relay.co.ke/api/partner/me \\
  -H "x-api-key: YOUR_API_KEY"`;

const profileResponseCode = `{
  "id": "vendor-uuid",
  "name": "Mama Njeri's Kitchen",
  "phone": "+254700000000",
  "address": "Kilifi Town, opposite the market",
  "category": "Restaurant",
  "webhookUrl": "https://yourshop.example/relay-webhook"
}`;

const webhookRequestCode = `curl -X POST https://relay.co.ke/api/partner/webhook \\
  -H "x-api-key: YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "url": "https://yourshop.example/relay-webhook"
  }'`;

const webhookPayloadCode = `{
  "event": "<event-name>",
  "data": {
    "waybill": "RLY-8K2NQ4TP",
    "status": "in_transit"
  }
}`;

const errorResponseCode = `{
  "statusCode": 400,
  "message": "Invalid Kenyan phone number",
  "error": "Bad Request"
}`;

function CodeBlock({
  title,
  language = "bash",
  code,
}) {
  const [copied, setCopied] = useState(false);

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch (error) {

      const textArea = document.createElement("textarea");

      textArea.value = code;
      textArea.setAttribute("readonly", "");
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";

      document.body.appendChild(textArea);
      textArea.select();

      document.execCommand("copy");
      document.body.removeChild(textArea);

      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 1800);

      console.error("Failed to copy code:", error);

    }
  };

  return (
    <div className="api-code">
      <div className="api-code__header">
        <div>
          <span>{language}</span>
          {title && <strong>{title}</strong>}
        </div>

        <button
          type="button"
          onClick={copyCode}
          aria-label={`Copy ${title || "code"} to clipboard`}
          className={copied ? "api-code__copy api-code__copy--copied" : "api-code__copy"}
        >
          {copied ? (
            <>
              <FiCheck aria-hidden="true" />
              Copied
            </>
          ) : (
            <>
              <FiCopy aria-hidden="true" />
              Copy
            </>
          )}
        </button>
      </div>

      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
}

function Endpoint({
  method,
  path,
  description,
}) {
  return (
    <div className="api-endpoint">
      <div className="api-endpoint__top">
        <span
          className={`api-endpoint__method api-endpoint__method--${method.toLowerCase()}`}
        >
          {method}
        </span>

        <code>{path}</code>
      </div>

      <p>{description}</p>
    </div>
  );
}

function PartnerApiDocs() {
  return (
    <main className="api-docs">
      <section className="api-docs__hero">
        <div className="site-container api-docs__hero-layout">
          <div className="api-docs__hero-content">
            <span className="api-docs__eyebrow">
              <FiCode aria-hidden="true" />
              Relay for developers
            </span>

            <h1>
              Partner API
              <span>Documentation</span>
            </h1>

            <p>
              Connect your business to Relay, create parcel delivery orders,
              track them programmatically and receive delivery updates through
              webhooks.
            </p>

            <div className="api-docs__hero-actions">
              <a
                href="#access"
                className="api-docs__primary-action"
              >
                Start integrating
                <FiArrowUpRight aria-hidden="true" />
              </a>

              <Link
                to="/partner-with-us"
                className="api-docs__secondary-action"
              >
                Become a partner
                <FiChevronRight aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="api-docs__hero-panel">
            <span className="api-docs__hero-panel-label">
              API overview
            </span>

            <div>
              <FiServer aria-hidden="true" />

              <span>
                Base URL
                <code>https://relay.co.ke/api</code>
              </span>
            </div>

            <div>
              <FiKey aria-hidden="true" />

              <span>
                Authentication
                <strong>x-api-key</strong>
              </span>
            </div>

            <div>
              <FiShield aria-hidden="true" />

              <span>
                Protocol
                <strong>HTTPS only</strong>
              </span>
            </div>

            <div>
              <FiCheckCircle aria-hidden="true" />

              <span>
                Format
                <strong>JSON</strong>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="api-docs__body">
        <div className="site-container api-docs__layout">
          <aside className="api-docs__sidebar">
            <div className="api-docs__sidebar-inner">
              <span className="api-docs__sidebar-title">
                Documentation
              </span>

              <nav aria-label="Partner API documentation">
                {navigationItems.map((item) => (
                  <a key={item.id} href={`#${item.id}`}>
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="api-docs__sidebar-help">
                <FiMail aria-hidden="true" />

                <span>Need integration support?</span>

                <a href="mailto:support@relay.co.ke">
                  support@relay.co.ke
                </a>
              </div>
            </div>
          </aside>

          <article className="api-docs__content">
            <section
              className="api-docs__section"
              id="overview"
            >
              <span className="api-docs__section-label">
                Introduction
              </span>

              <h2>Build parcel delivery into your business.</h2>

              <p>
                The Relay Partner API allows registered partners to create
                delivery orders directly from their own systems. It is suitable
                for online shops, restaurants, retailers, parcel offices,
                transport operators and other businesses that regularly send
                parcels to customers.
              </p>

              <div className="api-docs__feature-grid">
                <div>
                  <FiPackage aria-hidden="true" />
                  <h3>Create deliveries</h3>
                  <p>
                    Log customer delivery requests without leaving your own
                    system.
                  </p>
                </div>

                <div>
                  <FiTruck aria-hidden="true" />
                  <h3>Track orders</h3>
                  <p>
                    Retrieve recent orders and view the latest delivery status.
                  </p>
                </div>

                <div>
                  <MdOutlineWebhook aria-hidden="true" />
                  <h3>Receive updates</h3>
                  <p>
                    Use webhooks to receive delivery events in real time.
                  </p>
                </div>
              </div>
            </section>

            <section
              className="api-docs__section"
              id="access"
            >
              <span className="api-docs__section-label">
                Getting started
              </span>

              <h2>Getting access</h2>

              <p>
                The Partner API is available to approved Relay partners in
                supported service areas.
              </p>

              <div className="api-docs__steps">
                <div className="api-docs__step">
                  <span>01</span>

                  <div>
                    <h3>Contact Relay</h3>
                    <p>
                      Send your business name, operating location and expected
                      parcel volume to{" "}
                      <a href="mailto:support@relay.co.ke">
                        support@relay.co.ke
                      </a>
                      .
                    </p>
                  </div>
                </div>

                <div className="api-docs__step">
                  <span>02</span>

                  <div>
                    <h3>Complete partner onboarding</h3>
                    <p>
                      Relay creates your partner profile and confirms your
                      registered pickup location.
                    </p>
                  </div>
                </div>

                <div className="api-docs__step">
                  <span>03</span>

                  <div>
                    <h3>Receive your API key</h3>
                    <p>
                      Your private API key identifies your business on every
                      request.
                    </p>
                  </div>
                </div>
              </div>

              <div className="api-callout api-callout--warning">
                <FiAlertCircle aria-hidden="true" />

                <div>
                  <strong>Keep your API key private.</strong>

                  <p>
                    Never place the key in public frontend code, GitHub
                    repositories or browser-side requests. Store it securely on
                    your server.
                  </p>
                </div>
              </div>
            </section>

            <section
              className="api-docs__section"
              id="authentication"
            >
              <span className="api-docs__section-label">
                Security
              </span>

              <h2>Authentication</h2>

              <p>
                Add your API key to the{" "}
                <code className="api-inline-code">x-api-key</code> header on
                every request. Relay only accepts requests over HTTPS.
              </p>

              <CodeBlock
                title="Authentication example"
                language="bash"
                code={authenticationCode}
              />

              <p>
                Requests without a valid key return{" "}
                <code className="api-inline-code">401 Unauthorized</code>.
              </p>
            </section>

            <section
              className="api-docs__section"
              id="create-order"
            >
              <span className="api-docs__section-label">
                Orders
              </span>

              <h2>Create a delivery order</h2>

              <Endpoint
                method="POST"
                path="/api/partner/orders"
                description="Creates a parcel delivery order from your registered pickup point to a customer."
              />

              <h3 className="api-docs__subheading">
                Request body
              </h3>

              <div className="api-table-wrap">
                <table className="api-table">
                  <thead>
                    <tr>
                      <th>Field</th>
                      <th>Type</th>
                      <th>Requirement</th>
                      <th>Description</th>
                    </tr>
                  </thead>

                  <tbody>
                    {createOrderFields.map((item) => (
                      <tr key={item.field}>
                        <td>
                          <code>{item.field}</code>
                        </td>
                        <td>{item.type}</td>
                        <td>
                          <span
                            className={
                              item.required
                                ? "api-requirement api-requirement--required"
                                : "api-requirement"
                            }
                          >
                            {item.required ? "Required" : "Optional"}
                          </span>
                        </td>
                        <td>{item.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3 className="api-docs__subheading">
                Example request
              </h3>

              <CodeBlock
                title="Create delivery order"
                language="bash"
                code={createOrderRequestCode}
              />

              <h3 className="api-docs__subheading">
                Success response
              </h3>

              <CodeBlock
                title="201 Created"
                language="json"
                code={createOrderResponseCode}
              />

              <div className="api-callout">
                <FiCheckCircle aria-hidden="true" />

                <div>
                  <strong>What happens next</strong>

                  <p>
                    The customer receives the waybill information, and a
                    Relayer is dispatched to the registered pickup location.
                    The pickup code confirms the handover.
                  </p>
                </div>
              </div>
            </section>

            <section
              className="api-docs__section"
              id="list-orders"
            >
              <span className="api-docs__section-label">
                Orders
              </span>

              <h2>List your orders</h2>

              <Endpoint
                method="GET"
                path="/api/partner/orders"
                description="Returns your most recent parcel delivery orders, with the latest status for each."
              />

              <CodeBlock
                title="List recent orders"
                language="bash"
                code={listOrdersRequestCode}
              />

              <CodeBlock
                title="200 OK"
                language="json"
                code={listOrdersResponseCode}
              />

              <h3 className="api-docs__subheading">
                Order status values
              </h3>

              <div className="api-table-wrap">
                <table className="api-table">
                  <thead>
                    <tr>
                      <th>Status</th>
                      <th>Meaning</th>
                    </tr>
                  </thead>

                  <tbody>
                    {orderStatuses.map((item) => (
                      <tr key={item.status}>
                        <td>
                          <code>{item.status}</code>
                        </td>
                        <td>{item.meaning}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="api-callout">
                <FiLock aria-hidden="true" />

                <div>
                  <strong>Pickup code</strong>

                  <p>
                    Each order contains a{" "}
                    <code className="api-inline-code">pickupOtp</code>. Only
                    share it with the assigned Relayer during collection.
                  </p>
                </div>
              </div>
            </section>

            <section
              className="api-docs__section"
              id="profile"
            >
              <span className="api-docs__section-label">
                Account
              </span>

              <h2>Your partner profile</h2>

              <Endpoint
                method="GET"
                path="/api/partner/me"
                description="Returns the partner account associated with the API key."
              />

              <CodeBlock
                title="Get partner profile"
                language="bash"
                code={profileRequestCode}
              />

              <CodeBlock
                title="200 OK"
                language="json"
                code={profileResponseCode}
              />
            </section>

            <section
              className="api-docs__section"
              id="webhooks"
            >
              <span className="api-docs__section-label">
                Events
              </span>

              <h2>Webhooks</h2>

              <p>
                Register a secure HTTPS endpoint to receive delivery events as
                an order progresses.
              </p>

              <Endpoint
                method="POST"
                path="/api/partner/webhook"
                description="Registers or replaces the webhook URL connected to your partner account."
              />

              <CodeBlock
                title="Register webhook URL"
                language="bash"
                code={webhookRequestCode}
              />

              <h3 className="api-docs__subheading">
                Event payload
              </h3>

              <CodeBlock
                title="Webhook event"
                language="json"
                code={webhookPayloadCode}
              />

              <div className="api-callout api-callout--info">
                <FiRefreshCw aria-hidden="true" />

                <div>
                  <strong>Webhook handling</strong>

                  <p>
                    Respond with a successful 2xx status within five seconds.
                    Use the orders endpoint as your primary source of delivery
                    status if an event is missed.
                  </p>
                </div>
              </div>
            </section>

            <section
              className="api-docs__section"
              id="errors"
            >
              <span className="api-docs__section-label">
                Responses
              </span>

              <h2>Errors</h2>

              <p>
                Relay uses standard HTTP status codes and returns a JSON body
                describing the issue.
              </p>

              <CodeBlock
                title="Error response"
                language="json"
                code={errorResponseCode}
              />

              <div className="api-table-wrap">
                <table className="api-table">
                  <thead>
                    <tr>
                      <th>Code</th>
                      <th>Error</th>
                      <th>Meaning</th>
                    </tr>
                  </thead>

                  <tbody>
                    {errorCodes.map((item) => (
                      <tr key={item.code}>
                        <td>
                          <code>{item.code}</code>
                        </td>
                        <td>{item.title}</td>
                        <td>{item.meaning}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section
              className="api-docs__section api-docs__support"
              id="support"
            >
              <div>
                <span className="api-docs__section-label">
                  Integration support
                </span>

                <h2>Need help building your integration?</h2>

                <p>
                  Include your business name and any relevant waybill numbers
                  when contacting the Relay support team.
                </p>
              </div>

              <a href="mailto:support@relay.co.ke">
                Contact developer support
                <FiExternalLink aria-hidden="true" />
              </a>
            </section>
          </article>
        </div>
      </section>
    </main>
  );
}

export default PartnerApiDocs;