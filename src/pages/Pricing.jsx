import { Check } from 'lucide-react';
import Footer from '../components/Footer';

const priceList = [
  {
    name: "Starter",
    price: "$29",
    period: "/month",
    description: "Perfect for small teams",
    features: [
      "Up to 5 team members",
      "Basic expense tracking",
      "Email support",
      "Monthly reports",
      "2GB storage",
    ],
    highlighted: false,
  },
  {
    name: "Professional",
    price: "$79",
    period: "/month",
    description: "For growing companies",
    features: [
      "Up to 50 team members",
      "Advanced expense tracking",
      "Priority support",
      "Weekly & monthly reports",
      "100GB storage",
      "Custom integrations",
      "API access",
      "Advanced analytics",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "For large organizations",
    features: [
      "Unlimited team members",
      "Full customization",
      "24/7 dedicated support",
      "Real-time reporting",
      "Unlimited storage",
      "Advanced integrations",
      "API access",
      "Custom analytics",
      "SSO & security features",
    ],
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <>
   
    <div className="min-h-screen bg-white py-16 px-4 sm:px-8">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Start for free. Scale with Intelligence.
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Choose the perfect plan for your business. Always flexible to scale up or down.
        </p>

        {/* Toggle Button */}
        <div className="inline-flex bg-gray-200 rounded-full p-1">
          <button className="px-6 py-2 bg-white text-gray-900 font-medium rounded-full shadow-sm transition-all">
            Monthly
          </button>
          <button className="px-6 py-2 text-gray-600 font-medium rounded-full transition-all hover:text-gray-900">
            Annually
            <span className="ml-2 text-green-600 font-semibold">Save 20%</span>
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {priceList.map((plan, index) => (
          <div
            key={index}
            className={`rounded-lg overflow-hidden transition-all ${
              plan.highlighted
                ? "md:scale-105 bg-linear-to-br from-amber-400 to-amber-500 text-white shadow-2xl"
                : "bg-white text-gray-900 shadow-lg hover:shadow-xl"
            }`}
          >
            {/* Best Value Badge */}
            {plan.highlighted && (
              <div className="bg-amber-600 text-white text-sm font-semibold py-2 text-center">
                BEST VALUE
              </div>
            )}

            {/* Plan Content */}
            <div className="p-8">
              {/* Plan Name */}
              <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
              <p
                className={`text-sm mb-6 ${
                  plan.highlighted ? "text-amber-100" : "text-gray-600"
                }`}
              >
                {plan.description}
              </p>

              {/* Pricing */}
              <div className="mb-6">
                <div className="text-4xl font-bold mb-1">
                  {plan.price}
                  <span className="text-lg font-normal ml-2">{plan.period}</span>
                </div>
              </div>

              {/* CTA Button */}
              <button
                className={`w-full py-3 px-4 rounded-md font-semibold mb-8 transition-all ${
                  plan.highlighted
                    ? "bg-white text-amber-500 hover:bg-gray-100"
                    : "bg-amber-500 text-white hover:bg-amber-600"
                }`}
              >
                Get Started
              </button>

              {/* Features List */}
              <div className="space-y-4">
                <p
                  className={`text-sm font-semibold mb-4 ${
                    plan.highlighted ? "text-amber-100" : "text-gray-700"
                  }`}
                >
                  What's included:
                </p>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check
                        size={20}
                        className={`shrink-0 mt-0.5 ${
                          plan.highlighted ? "text-amber-100" : "text-green-500"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          plan.highlighted ? "text-amber-50" : "text-gray-700"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto mt-20 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-8">
          Have questions?
        </h3>
        <p className="text-gray-600 mb-6">
          Check out our{" "}
          <a href="#" className="text-amber-500 hover:text-amber-600 font-semibold">
            FAQ
          </a>{" "}
          or{" "}
          <a href="#" className="text-amber-500 hover:text-amber-600 font-semibold">
            contact our sales team
          </a>
        </p>
        <p className="text-sm text-gray-500">
          All plans include a 14-day free trial. No credit card required.
        </p>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Pricing;
