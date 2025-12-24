import Badge from "./Badge";

export default function TermConditions({ isDark }:any) {
    const terms = [
        {
            title: "Services",
            description:
                "We provide branding, social media marketing, video production, website development, SEO, digital marketing, and graphic design. The scope will be agreed upon before starting.",
        },
        {
            title: "Payments",
            description:
                "A deposit may be required before work begins. Full payment is due before final delivery. Late payments may incur additional charges.",
        },
        {
            title: "Revisions",
            description:
                "Limited revisions are included as per the agreement. Additional revisions or major scope changes may be subject to extra charges.",
        },
        {
            title: "Intellectual Property",
            description:
                "Spineor WebServices retains ownership of all concepts until full payment. After payment, final deliverables belong to the client. Completed work may be used in our portfolio unless otherwise agreed.",
        },
        {
            title: "Client Responsibilities",
            description:
                "Clients must provide necessary content, materials, and approvals on time. Delays in feedback may affect project timelines.",
        },
        {
            title: "Confidentiality",
            description:
                "Both parties agree to keep shared business information confidential.",
        },
        {
            title: "Liability",
            description:
                "We are not liable for indirect or consequential losses or errors caused by third-party tools or platforms.",
        },
        {
            title: "Termination & Refunds",
            description:
                "Either party may terminate the contract with written notice. Refunds, if applicable, will be considered based on project progress.",
        },
    ];

    return (
        <>
            <section className="max-w-7xl px-4 mx-auto mt-15">
                <div
                    className={`  flex items-center  p-10 ${isDark
                        ? "bg-[linear-gradient(135deg,#1a1a1a_5%,#3b1d0f_100%)]"
                        : "bg-[linear-gradient(135deg,#0b1f3a_0%,#143d73_35%,#194a89_65%,#2f6db5_100%)]"
                        }`}
                >


                    <div className="w-full mx-auto  text-white">
                        <Badge title="Spineor WebServices" lineColor="bg-white" />
                        <div className="">
                            <h1 className="text-4xl md:text-5xl font-bold mb-7">
                                Terms & Conditions
                            </h1>
                            <p className="text-lg opacity-80 mb-10">
                                By engaging with Spineor WebServices, you agree to the following terms:
                            </p>

                            <div className=" space-y-6">
                                {terms.map((item, index) => (
                                    <div key={index} className="flex gap-3">
                                        <span className="font-semibold ">
                                            {index + 1}.
                                        </span>
                                        <p className="leading-relaxed text-white/90">
                                            <span className="font-semibold">{item.title}</span> —{" "}
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}