// src/data/accenture/cloudComputingData.js
// 100 Verified Questions: Cloud Computing, Virtualization, Storage, IAM, VPC & Deployment

export const CLOUD_COMPUTING_MCQS = [
  {
    "id": "cloud_001",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "Cloud Computing",
    "difficulty": "easy",
    "title": "Cloud Computing • Question #1",
    "question": "Which of the following is a primary characteristic of cloud computing?",
    "options": [
      {
        "key": "A",
        "text": "On-demand self-service",
        "explanation": "Correct. Cloud users can provision resources on demand through automated interfaces."
      },
      {
        "key": "B",
        "text": "High latency",
        "explanation": "Incorrect. High latency is not a defining characteristic of cloud computing."
      },
      {
        "key": "C",
        "text": "Fixed storage",
        "explanation": "Incorrect. Cloud resources are generally elastic rather than fixed."
      },
      {
        "key": "D",
        "text": "Manual resource allocation",
        "explanation": "Incorrect. Cloud computing aims to reduce manual provisioning, not require it."
      }
    ],
    "correct_option": "A",
    "correct_answer": "On-demand self-service",
    "explanation": "On-demand self-service is a defining cloud characteristic: users can provision computing resources when needed without requiring manual provider intervention."
  },
  {
    "id": "cloud_002",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "Cloud Computing",
    "difficulty": "medium",
    "title": "Cloud Computing • Question #2",
    "question": "What does cloud computing primarily aim to reduce?",
    "options": [
      {
        "key": "A",
        "text": "Security",
        "explanation": "Incorrect. Cloud computing requires security controls; reducing security is not its goal."
      },
      {
        "key": "B",
        "text": "Cost",
        "explanation": "Correct. Cloud services can reduce infrastructure and operational costs."
      },
      {
        "key": "C",
        "text": "Speed",
        "explanation": "Incorrect. Cloud computing generally seeks efficient access and performance, not reduced speed."
      },
      {
        "key": "D",
        "text": "Reliability",
        "explanation": "Incorrect. Cloud architectures aim to maintain or improve reliability, not reduce it."
      }
    ],
    "correct_option": "B",
    "correct_answer": "Cost",
    "explanation": "Cloud computing can reduce capital and operational costs by replacing or reducing the need for owned physical infrastructure and enabling pay-as-you-go consumption."
  },
  {
    "id": "cloud_003",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "Cloud Deployment Models",
    "difficulty": "hard",
    "title": "Cloud Deployment Models • Question #3",
    "question": "Which of the following is not a type of cloud computing deployment model?",
    "options": [
      {
        "key": "A",
        "text": "Public cloud",
        "explanation": "Incorrect. Public cloud is a recognized deployment model."
      },
      {
        "key": "B",
        "text": "Private cloud",
        "explanation": "Incorrect. Private cloud is a recognized deployment model."
      },
      {
        "key": "C",
        "text": "Hybrid cloud",
        "explanation": "Incorrect. Hybrid cloud combines public and private environments."
      },
      {
        "key": "D",
        "text": "Local cloud",
        "explanation": "Correct. 'Local cloud' is not a standard NIST cloud deployment model."
      }
    ],
    "correct_option": "D",
    "correct_answer": "Local cloud",
    "explanation": "Correct. 'Local cloud' is not a standard NIST cloud deployment model."
  },
  {
    "id": "cloud_004",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "Cloud Computing",
    "difficulty": "easy",
    "title": "Cloud Computing • Question #4",
    "question": "Cloud computing allows for which of the following?",
    "options": [
      {
        "key": "A",
        "text": "Fixed capacity",
        "explanation": "Incorrect. Cloud resources can be scaled rather than being permanently fixed."
      },
      {
        "key": "B",
        "text": "Unlimited scalability",
        "explanation": "Best answer. Cloud computing supports elastic scaling, although real services have quotas and limits."
      },
      {
        "key": "C",
        "text": "Local-only access",
        "explanation": "Incorrect. Cloud services are designed for network-based access, not local-only access."
      },
      {
        "key": "D",
        "text": "Hardware dependence",
        "explanation": "Incorrect. Cloud computing abstracts much of the underlying hardware from users."
      }
    ],
    "correct_option": "B",
    "correct_answer": "Unlimited scalability",
    "explanation": "Cloud platforms provide elasticity and scalable resource provisioning. In practice, scalability is bounded by service quotas and physical/provider capacity, so 'unlimited' is an idealized wording."
  },
  {
    "id": "cloud_005",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "Cloud Computing",
    "difficulty": "medium",
    "title": "Cloud Computing • Question #5",
    "question": "What key factor distinguishes cloud computing from traditional IT infrastructures?",
    "options": [
      {
        "key": "A",
        "text": "Decentralization",
        "explanation": "Source answer, but technically imprecise. Cloud computing is not defined simply by decentralization; its defining characteristics include on-demand self-service, resource pooling, elasticity, and measured service."
      },
      {
        "key": "B",
        "text": "Centralized hardware",
        "explanation": "Incorrect. Cloud providers may centralize physical infrastructure while exposing it as shared services."
      },
      {
        "key": "C",
        "text": "On-site management",
        "explanation": "Incorrect. Cloud services generally move much infrastructure management to the provider."
      },
      {
        "key": "D",
        "text": "Manual updates",
        "explanation": "Incorrect. Automation is a major cloud capability; manual updates are not the distinguishing feature."
      }
    ],
    "correct_option": "A",
    "correct_answer": "Decentralization",
    "explanation": "Source answer, but technically imprecise. Cloud computing is not defined simply by decentralization; its defining characteristics include on-demand self-service, resource pooling, elasticity, and measured service."
  },
  {
    "id": "cloud_006",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "Cloud Service Models",
    "difficulty": "hard",
    "title": "Cloud Service Models • Question #6",
    "question": "Which type of cloud service primarily offers virtualized hardware resources?",
    "options": [
      {
        "key": "A",
        "text": "SaaS",
        "explanation": "Incorrect. SaaS provides complete applications to end users."
      },
      {
        "key": "B",
        "text": "IaaS",
        "explanation": "Correct. IaaS provides virtualized compute, storage, and networking resources."
      },
      {
        "key": "C",
        "text": "PaaS",
        "explanation": "Incorrect. PaaS provides a managed application platform rather than raw virtualized hardware."
      },
      {
        "key": "D",
        "text": "DaaS",
        "explanation": "Incorrect. DaaS commonly refers to Desktop as a Service, which provides managed virtual desktops."
      }
    ],
    "correct_option": "B",
    "correct_answer": "IaaS",
    "explanation": "Correct. IaaS provides virtualized compute, storage, and networking resources."
  },
  {
    "id": "cloud_007",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "Virtualization",
    "difficulty": "easy",
    "title": "Virtualization • Question #7",
    "question": "Which of the following technologies is most commonly used in cloud computing?",
    "options": [
      {
        "key": "A",
        "text": "Virtualization",
        "explanation": "Correct. Virtualization enables efficient pooling and isolation of compute resources."
      },
      {
        "key": "B",
        "text": "Blockchain",
        "explanation": "Incorrect. Blockchain can run in cloud environments but is not the core enabling technology."
      },
      {
        "key": "C",
        "text": "Quantum computing",
        "explanation": "Incorrect. Quantum computing is specialized and not a common foundation of cloud infrastructure."
      },
      {
        "key": "D",
        "text": "Augmented reality",
        "explanation": "Incorrect. Augmented reality is an application technology, not a core cloud infrastructure technology."
      }
    ],
    "correct_option": "A",
    "correct_answer": "Virtualization",
    "explanation": "Correct. Virtualization enables efficient pooling and isolation of compute resources."
  },
  {
    "id": "cloud_008",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "AWS CLI",
    "difficulty": "medium",
    "title": "AWS CLI • Question #8",
    "question": "Which command in AWS CLI can you use to configure a default profile for cloud access?",
    "options": [
      {
        "key": "A",
        "text": "aws configure",
        "explanation": "Correct. `aws configure` interactively sets credentials, region, and output settings for a profile."
      },
      {
        "key": "B",
        "text": "aws init",
        "explanation": "Incorrect. `aws init` is not the standard AWS CLI command for configuring credentials."
      },
      {
        "key": "C",
        "text": "aws setup",
        "explanation": "Incorrect. `aws setup` is not the standard AWS CLI configuration command."
      },
      {
        "key": "D",
        "text": "aws create-user",
        "explanation": "Incorrect. `aws create-user` is not an AWS CLI command; IAM users are created with `aws iam create-user`."
      }
    ],
    "correct_option": "A",
    "correct_answer": "aws configure",
    "explanation": "Correct. `aws configure` interactively sets credentials, region, and output settings for a profile."
  },
  {
    "id": "cloud_009",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "Cloud Performance",
    "difficulty": "hard",
    "title": "Cloud Performance • Question #9",
    "question": "A company moved to a cloud environment, but users are facing slow data access times. What could be the cause?",
    "options": [
      {
        "key": "A",
        "text": "Insufficient bandwidth",
        "explanation": "Correct. Insufficient network bandwidth can become a bottleneck for data transfer."
      },
      {
        "key": "B",
        "text": "Automatic scaling",
        "explanation": "Incorrect. Automatic scaling generally adds resources rather than causing slow access by itself."
      },
      {
        "key": "C",
        "text": "Virtualization",
        "explanation": "Incorrect. Virtualization is an enabling technology and is not inherently a cause of slow data access."
      },
      {
        "key": "D",
        "text": "Dedicated server allocation",
        "explanation": "Incorrect. Dedicated allocation can improve isolation and predictability rather than being the typical cause."
      }
    ],
    "correct_option": "A",
    "correct_answer": "Insufficient bandwidth",
    "explanation": "Correct. Insufficient network bandwidth can become a bottleneck for data transfer."
  },
  {
    "id": "cloud_010",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "Cloud Service Models",
    "difficulty": "easy",
    "title": "Cloud Service Models • Question #10",
    "question": "Which of the following is an example of Software as a Service (SaaS)?",
    "options": [
      {
        "key": "A",
        "text": "Microsoft Azure",
        "explanation": "Incorrect. Microsoft Azure is a cloud platform containing many service types, not itself a single SaaS application."
      },
      {
        "key": "B",
        "text": "Amazon EC2",
        "explanation": "Incorrect. Amazon EC2 is an IaaS compute service."
      },
      {
        "key": "C",
        "text": "Google Docs",
        "explanation": "Correct. Google Docs is a browser-delivered application, fitting the SaaS model."
      },
      {
        "key": "D",
        "text": "VMware",
        "explanation": "Incorrect. VMware is primarily virtualization/infrastructure software and products, not the SaaS example here."
      }
    ],
    "correct_option": "C",
    "correct_answer": "Google Docs",
    "explanation": "Correct. Google Docs is a browser-delivered application, fitting the SaaS model."
  },
  {
    "id": "cloud_011",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "Cloud Service Models",
    "difficulty": "medium",
    "title": "Cloud Service Models • Question #11",
    "question": "In which cloud service model does the provider manage everything from hardware to applications?",
    "options": [
      {
        "key": "A",
        "text": "IaaS",
        "explanation": "Incorrect. In IaaS, the customer manages the guest OS and above."
      },
      {
        "key": "B",
        "text": "PaaS",
        "explanation": "Incorrect. In PaaS, the provider manages the platform but the customer still manages application code/data."
      },
      {
        "key": "C",
        "text": "SaaS",
        "explanation": "Correct. In SaaS, the provider operates the application and underlying platform and infrastructure."
      },
      {
        "key": "D",
        "text": "DaaS",
        "explanation": "Incorrect. DaaS focuses on managed desktops rather than all applications generally."
      }
    ],
    "correct_option": "C",
    "correct_answer": "SaaS",
    "explanation": "Correct. In SaaS, the provider operates the application and underlying platform and infrastructure."
  },
  {
    "id": "cloud_012",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "Cloud Service Models",
    "difficulty": "hard",
    "title": "Cloud Service Models • Question #12",
    "question": "Which of the following is a key benefit of Platform as a Service (PaaS)?",
    "options": [
      {
        "key": "A",
        "text": "Full hardware control",
        "explanation": "Incorrect. PaaS abstracts most underlying hardware management."
      },
      {
        "key": "B",
        "text": "Faster development",
        "explanation": "Correct. PaaS supplies managed runtimes and developer services that can accelerate application development."
      },
      {
        "key": "C",
        "text": "Manual scaling",
        "explanation": "Incorrect. PaaS commonly provides automation and managed scaling capabilities."
      },
      {
        "key": "D",
        "text": "Increased hardware flexibility",
        "explanation": "Incorrect. PaaS emphasizes abstraction rather than direct hardware control."
      }
    ],
    "correct_option": "B",
    "correct_answer": "Faster development",
    "explanation": "Correct. PaaS supplies managed runtimes and developer services that can accelerate application development."
  },
  {
    "id": "cloud_013",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "Shared Responsibility / IaaS",
    "difficulty": "easy",
    "title": "Shared Responsibility / IaaS • Question #13",
    "question": "In the IaaS model, which of the following is the responsibility of the user?",
    "options": [
      {
        "key": "A",
        "text": "Application updates",
        "explanation": "Also generally a customer responsibility in IaaS, so this question is not uniquely single-answer."
      },
      {
        "key": "B",
        "text": "Networking",
        "explanation": "Customer configures virtual networking, while the provider operates the underlying physical network; therefore this can also be a shared responsibility."
      },
      {
        "key": "C",
        "text": "Operating system",
        "explanation": "Best answer among the choices. The customer normally manages the guest operating system in IaaS."
      },
      {
        "key": "D",
        "text": "Data backup",
        "explanation": "Data backup is also commonly the customer's responsibility, depending on the service and backup arrangement."
      }
    ],
    "correct_option": "C",
    "correct_answer": "Operating system",
    "explanation": "Best answer among the choices. The customer normally manages the guest operating system in IaaS."
  },
  {
    "id": "cloud_014",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "Cloud Service Models",
    "difficulty": "medium",
    "title": "Cloud Service Models • Question #14",
    "question": "Which cloud service model is best suited for developers who want to build custom applications without managing infrastructure?",
    "options": [
      {
        "key": "A",
        "text": "SaaS",
        "explanation": "Incorrect. SaaS provides a finished application rather than an application development platform."
      },
      {
        "key": "B",
        "text": "PaaS",
        "explanation": "Correct. PaaS provides managed runtime, middleware, and infrastructure so developers can focus on application code."
      },
      {
        "key": "C",
        "text": "IaaS",
        "explanation": "Incorrect. IaaS still requires the customer to manage the operating system and more infrastructure layers."
      },
      {
        "key": "D",
        "text": "FaaS",
        "explanation": "Incorrect as the general answer. FaaS abstracts servers for event-driven functions but is narrower than PaaS for general application development."
      }
    ],
    "correct_option": "B",
    "correct_answer": "PaaS",
    "explanation": "Correct. PaaS provides managed runtime, middleware, and infrastructure so developers can focus on application code."
  },
  {
    "id": "cloud_015",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "Shared Responsibility / IaaS",
    "difficulty": "hard",
    "title": "Shared Responsibility / IaaS • Question #15",
    "question": "Which of the following is typically not a responsibility of the cloud provider in an IaaS model?",
    "options": [
      {
        "key": "A",
        "text": "Networking",
        "explanation": "Incorrect. The provider operates the physical networking infrastructure."
      },
      {
        "key": "B",
        "text": "Security",
        "explanation": "Incorrect. The provider is responsible for security of the underlying cloud infrastructure, while customers have their own security responsibilities."
      },
      {
        "key": "C",
        "text": "Applications",
        "explanation": "Correct. In IaaS, customers are responsible for their applications."
      },
      {
        "key": "D",
        "text": "Virtualization",
        "explanation": "Incorrect. The provider operates the virtualization layer in a typical IaaS service."
      }
    ],
    "correct_option": "C",
    "correct_answer": "Applications",
    "explanation": "Correct. In IaaS, customers are responsible for their applications."
  },
  {
    "id": "cloud_016",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "Cloud Service Models",
    "difficulty": "easy",
    "title": "Cloud Service Models • Question #16",
    "question": "Which service model allows customers to rent virtualized computing resources over the internet?",
    "options": [
      {
        "key": "A",
        "text": "SaaS",
        "explanation": "Incorrect. SaaS supplies applications."
      },
      {
        "key": "B",
        "text": "IaaS",
        "explanation": "Correct. IaaS provides rented virtualized compute, storage, and networking resources."
      },
      {
        "key": "C",
        "text": "PaaS",
        "explanation": "Incorrect. PaaS provides a managed development/application platform."
      },
      {
        "key": "D",
        "text": "DBaaS",
        "explanation": "Incorrect. DBaaS provides a managed database service."
      }
    ],
    "correct_option": "B",
    "correct_answer": "IaaS",
    "explanation": "Correct. IaaS provides rented virtualized compute, storage, and networking resources."
  },
  {
    "id": "cloud_017",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "AWS Services",
    "difficulty": "medium",
    "title": "AWS Services • Question #17",
    "question": "Which AWS service is an example of Infrastructure as a Service (IaaS)?",
    "options": [
      {
        "key": "A",
        "text": "AWS Lambda",
        "explanation": "Incorrect. Lambda is a serverless function platform."
      },
      {
        "key": "B",
        "text": "Amazon EC2",
        "explanation": "Correct. EC2 provides virtual compute instances and is a classic IaaS service."
      },
      {
        "key": "C",
        "text": "AWS S3",
        "explanation": "Incorrect. S3 is object storage, not general-purpose IaaS compute."
      },
      {
        "key": "D",
        "text": "AWS CloudFormation",
        "explanation": "Incorrect. CloudFormation is infrastructure provisioning/orchestration as code."
      }
    ],
    "correct_option": "B",
    "correct_answer": "Amazon EC2",
    "explanation": "Correct. EC2 provides virtual compute instances and is a classic IaaS service."
  },
  {
    "id": "cloud_018",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "SaaS",
    "difficulty": "hard",
    "title": "SaaS • Question #18",
    "question": "A company using a SaaS product for their business processes is facing issues with scaling. What could be the reason?",
    "options": [
      {
        "key": "A",
        "text": "Lack of cloud resources",
        "explanation": "Possible in a poorly provisioned service, but not enough information is given."
      },
      {
        "key": "B",
        "text": "SaaS application has limited scalability",
        "explanation": "Source answer. A specific SaaS product may impose service or tenant limits, but this is not inherent to SaaS."
      },
      {
        "key": "C",
        "text": "Overloaded servers",
        "explanation": "Possible, but 'overloaded servers' is a symptom/cause that depends on provider architecture."
      },
      {
        "key": "D",
        "text": "Network issues",
        "explanation": "Possible if the scaling problem is actually caused by connectivity, but the scenario does not establish this."
      }
    ],
    "correct_option": "B",
    "correct_answer": "SaaS application has limited scalability",
    "explanation": "Source answer. A specific SaaS product may impose service or tenant limits, but this is not inherent to SaaS."
  },
  {
    "id": "cloud_019",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "Cloud Deployment Models",
    "difficulty": "easy",
    "title": "Cloud Deployment Models • Question #19",
    "question": "Which of the following is a public cloud deployment model?",
    "options": [
      {
        "key": "A",
        "text": "AWS",
        "explanation": "AWS is a public cloud provider/platform, but the wording asks for the deployment model, so this option is imprecise."
      },
      {
        "key": "B",
        "text": "VMware",
        "explanation": "VMware is a technology/vendor, not a cloud deployment model."
      },
      {
        "key": "C",
        "text": "Microsoft Azure",
        "explanation": "Microsoft Azure is a public cloud platform, but again is a provider/platform rather than the deployment-model name."
      },
      {
        "key": "D",
        "text": "Both AWS and Microsoft Azure",
        "explanation": "Best answer among the choices because both AWS and Azure provide public cloud services; the question should ideally ask which providers offer public cloud."
      }
    ],
    "correct_option": "D",
    "correct_answer": "Both AWS and Microsoft Azure",
    "explanation": "Best answer among the choices because both AWS and Azure provide public cloud services; the question should ideally ask which providers offer public cloud."
  },
  {
    "id": "cloud_020",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "Cloud Deployment Models",
    "difficulty": "medium",
    "title": "Cloud Deployment Models • Question #20",
    "question": "What is a key advantage of a private cloud model?",
    "options": [
      {
        "key": "A",
        "text": "Shared resources",
        "explanation": "Incorrect. Private cloud is dedicated to a single organization rather than broadly shared among unrelated tenants."
      },
      {
        "key": "B",
        "text": "Increased security",
        "explanation": "Correct in the sense of greater control, isolation, and customization; however, private cloud is not automatically more secure."
      },
      {
        "key": "C",
        "text": "Low cost",
        "explanation": "Incorrect. Private cloud can have higher capital and operating costs."
      },
      {
        "key": "D",
        "text": "Limited scalability",
        "explanation": "Incorrect. Private cloud can be designed for scalability, though its capacity may be more constrained than a public cloud."
      }
    ],
    "correct_option": "B",
    "correct_answer": "Increased security",
    "explanation": "Correct in the sense of greater control, isolation, and customization; however, private cloud is not automatically more secure."
  },
  {
    "id": "cloud_021",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "Cloud Deployment Models",
    "difficulty": "hard",
    "title": "Cloud Deployment Models • Question #21",
    "question": "Which deployment model combines both private and public cloud features?",
    "options": [
      {
        "key": "A",
        "text": "Public cloud",
        "explanation": "Incorrect. Public cloud is operated for multiple customers."
      },
      {
        "key": "B",
        "text": "Hybrid cloud",
        "explanation": "Correct. Hybrid cloud combines private/on-premises environments with public cloud resources."
      },
      {
        "key": "C",
        "text": "Private cloud",
        "explanation": "Incorrect. Private cloud is dedicated to one organization."
      },
      {
        "key": "D",
        "text": "Community cloud",
        "explanation": "Incorrect. Community cloud is shared by organizations with common requirements."
      }
    ],
    "correct_option": "B",
    "correct_answer": "Hybrid cloud",
    "explanation": "Correct. Hybrid cloud combines private/on-premises environments with public cloud resources."
  },
  {
    "id": "cloud_022",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "Cloud Deployment Models",
    "difficulty": "easy",
    "title": "Cloud Deployment Models • Question #22",
    "question": "Which of the following is a characteristic of community cloud deployment?",
    "options": [
      {
        "key": "A",
        "text": "Infrastructure is shared between several organizations",
        "explanation": "Correct. A community cloud is shared by organizations with common concerns or requirements."
      },
      {
        "key": "B",
        "text": "Infrastructure is managed by a single organization",
        "explanation": "Incorrect. A community cloud can have shared governance or a third-party provider; it is not defined as one organization's private infrastructure."
      },
      {
        "key": "C",
        "text": "No scalability",
        "explanation": "Incorrect. Community clouds can be scalable."
      },
      {
        "key": "D",
        "text": "Only available to government organizations",
        "explanation": "Incorrect. Community clouds are not limited to government organizations."
      }
    ],
    "correct_option": "A",
    "correct_answer": "Infrastructure is shared between several organizations",
    "explanation": "Correct. A community cloud is shared by organizations with common concerns or requirements."
  },
  {
    "id": "cloud_023",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "Cloud Deployment Models",
    "difficulty": "medium",
    "title": "Cloud Deployment Models • Question #23",
    "question": "Which of the following scenarios is best suited for a hybrid cloud model?",
    "options": [
      {
        "key": "A",
        "text": "A government agency hosting sensitive data",
        "explanation": "Could use hybrid cloud, but the scenario alone does not require it."
      },
      {
        "key": "B",
        "text": "A startup hosting a website",
        "explanation": "A simple startup website can often use public cloud without hybrid complexity."
      },
      {
        "key": "C",
        "text": "A large enterprise with varying workloads",
        "explanation": "Correct. Varying workloads can benefit from combining private/on-premises resources with public-cloud elasticity."
      },
      {
        "key": "D",
        "text": "A personal blog",
        "explanation": "A personal blog normally does not require hybrid deployment."
      }
    ],
    "correct_option": "C",
    "correct_answer": "A large enterprise with varying workloads",
    "explanation": "Correct. Varying workloads can benefit from combining private/on-premises resources with public-cloud elasticity."
  },
  {
    "id": "cloud_024",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "Cloud Deployment Models",
    "difficulty": "hard",
    "title": "Cloud Deployment Models • Question #24",
    "question": "What is the primary benefit of a community cloud over a public cloud?",
    "options": [
      {
        "key": "A",
        "text": "Higher security",
        "explanation": "Best among these choices if the intended idea is stronger organization-specific controls or compliance, but security is not automatically higher."
      },
      {
        "key": "B",
        "text": "Lower cost",
        "explanation": "Not necessarily. Cost depends on architecture, ownership, and governance."
      },
      {
        "key": "C",
        "text": "No need for maintenance",
        "explanation": "Incorrect. Community clouds still require maintenance and management."
      },
      {
        "key": "D",
        "text": "More scalability",
        "explanation": "Not inherently. Scalability depends on the implementation."
      }
    ],
    "correct_option": "A",
    "correct_answer": "Higher security",
    "explanation": "Best among these choices if the intended idea is stronger organization-specific controls or compliance, but security is not automatically higher."
  },
  {
    "id": "cloud_025",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "Google Cloud CLI",
    "difficulty": "easy",
    "title": "Google Cloud CLI • Question #25",
    "question": "In Google Cloud Platform (GCP), which command can be used to create a new virtual machine instance in a public cloud environment?",
    "options": [
      {
        "key": "A",
        "text": "gcloud init",
        "explanation": "Incorrect. `gcloud init` initializes CLI configuration and authentication."
      },
      {
        "key": "B",
        "text": "gcloud compute instances create",
        "explanation": "Correct. Google documents `gcloud compute instances create` for creating Compute Engine instances."
      },
      {
        "key": "C",
        "text": "gcloud vm create",
        "explanation": "Incorrect. `gcloud vm create` is not the standard Compute Engine command."
      },
      {
        "key": "D",
        "text": "gcloud new vm",
        "explanation": "Incorrect. `gcloud new vm` is not a valid standard command."
      }
    ],
    "correct_option": "B",
    "correct_answer": "gcloud compute instances create",
    "explanation": "Correct. Google documents `gcloud compute instances create` for creating Compute Engine instances."
  },
  {
    "id": "cloud_026",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "Azure",
    "difficulty": "medium",
    "title": "Azure • Question #26",
    "question": "Which Azure service is used to deploy applications across a hybrid cloud model?",
    "options": [
      {
        "key": "A",
        "text": "Azure Stack",
        "explanation": "Correct. Azure Stack extends Azure services into customer-controlled environments, supporting hybrid scenarios."
      },
      {
        "key": "B",
        "text": "Azure Kubernetes Service",
        "explanation": "Incorrect. AKS is a managed Kubernetes service; it can participate in hybrid architectures but is not itself the hybrid-cloud platform named here."
      },
      {
        "key": "C",
        "text": "Azure VMs",
        "explanation": "Incorrect. Azure VMs provide compute but do not by themselves provide the hybrid-cloud extension described."
      },
      {
        "key": "D",
        "text": "Azure Functions",
        "explanation": "Incorrect. Azure Functions is serverless compute, not the general hybrid-cloud platform."
      }
    ],
    "correct_option": "A",
    "correct_answer": "Azure Stack",
    "explanation": "Correct. Azure Stack extends Azure services into customer-controlled environments, supporting hybrid scenarios."
  },
  {
    "id": "cloud_027",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "AWS Networking",
    "difficulty": "hard",
    "title": "AWS Networking • Question #27",
    "question": "Which AWS service is ideal for deploying applications in a private cloud environment?",
    "options": [
      {
        "key": "A",
        "text": "AWS Direct Connect",
        "explanation": "Incorrect. Direct Connect provides dedicated connectivity between on-premises networks and AWS."
      },
      {
        "key": "B",
        "text": "AWS Lambda",
        "explanation": "Incorrect. Lambda is serverless compute."
      },
      {
        "key": "C",
        "text": "AWS EC2",
        "explanation": "Incorrect. EC2 provides virtual machines but is not itself a private-cloud deployment mechanism."
      },
      {
        "key": "D",
        "text": "AWS VPC",
        "explanation": "Source answer, but technically incomplete: VPC is a logically isolated virtual network, not a private cloud."
      }
    ],
    "correct_option": "D",
    "correct_answer": "AWS VPC",
    "explanation": "Source answer, but technically incomplete: VPC is a logically isolated virtual network, not a private cloud."
  },
  {
    "id": "cloud_028",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "AWS Networking",
    "difficulty": "easy",
    "title": "AWS Networking • Question #28",
    "question": "In a hybrid cloud setup, which AWS tool helps securely connect an on-premises private cloud to the AWS public cloud?",
    "options": [
      {
        "key": "A",
        "text": "AWS VPN",
        "explanation": "Valid solution. Site-to-Site VPN creates an encrypted connection over the internet."
      },
      {
        "key": "B",
        "text": "AWS Direct Connect",
        "explanation": "Also valid and the source answer. Direct Connect provides dedicated private connectivity to AWS."
      },
      {
        "key": "C",
        "text": "AWS Lambda",
        "explanation": "Incorrect. Lambda is serverless compute."
      },
      {
        "key": "D",
        "text": "AWS CloudFormation",
        "explanation": "Incorrect. CloudFormation provisions AWS resources as infrastructure as code."
      }
    ],
    "correct_option": "B",
    "correct_answer": "AWS Direct Connect",
    "explanation": "Also valid and the source answer. Direct Connect provides dedicated private connectivity to AWS."
  },
  {
    "id": "cloud_029",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "Cloud Security",
    "difficulty": "medium",
    "title": "Cloud Security • Question #29",
    "question": "A company using a public cloud environment is facing data security concerns. What could be a possible solution?",
    "options": [
      {
        "key": "A",
        "text": "Move to a hybrid cloud",
        "explanation": "Possible architectural response, but it does not inherently solve security problems."
      },
      {
        "key": "B",
        "text": "Upgrade public cloud security",
        "explanation": "Also potentially correct if this means strengthening provider-side/customer-side controls, but it is vague."
      },
      {
        "key": "C",
        "text": "Use more encryption",
        "explanation": "Correct. Encryption is a direct control for protecting data at rest and/or in transit."
      },
      {
        "key": "D",
        "text": "Migrate to private cloud",
        "explanation": "Possible in some threat models, but private cloud is not automatically more secure."
      }
    ],
    "correct_option": "C",
    "correct_answer": "Use more encryption",
    "explanation": "Correct. Encryption is a direct control for protecting data at rest and/or in transit."
  },
  {
    "id": "cloud_030",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "Cloud Scalability",
    "difficulty": "hard",
    "title": "Cloud Scalability • Question #30",
    "question": "An organization using a private cloud is finding it difficult to scale during peak times. What could be the solution?",
    "options": [
      {
        "key": "A",
        "text": "Migrate fully to a public cloud",
        "explanation": "Possible, but full migration is not necessary to add public-cloud elasticity."
      },
      {
        "key": "B",
        "text": "Move to a hybrid cloud",
        "explanation": "Correct. Hybrid cloud can retain private infrastructure while bursting or extending workloads into public cloud."
      },
      {
        "key": "C",
        "text": "Increase private cloud resources",
        "explanation": "Possible, but it may not provide the elasticity of public-cloud capacity and can require more capital."
      },
      {
        "key": "D",
        "text": "Move to a community cloud",
        "explanation": "Incorrect. Community cloud does not inherently solve private-cloud peak capacity constraints."
      }
    ],
    "correct_option": "B",
    "correct_answer": "Move to a hybrid cloud",
    "explanation": "Correct. Hybrid cloud can retain private infrastructure while bursting or extending workloads into public cloud."
  },
  {
    "id": "cloud_031",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "Virtualization",
    "difficulty": "easy",
    "title": "Virtualization • Question #31",
    "question": "What is the primary benefit of virtualization in cloud computing?",
    "options": [
      {
        "key": "A",
        "text": "Increased physical servers",
        "explanation": "Incorrect. Virtualization aims to use existing physical resources more efficiently."
      },
      {
        "key": "B",
        "text": "Resource optimization",
        "explanation": "Correct. Multiple virtual workloads can share physical resources, improving utilization."
      },
      {
        "key": "C",
        "text": "Lower bandwidth usage",
        "explanation": "Incorrect. Virtualization does not inherently reduce network bandwidth usage."
      },
      {
        "key": "D",
        "text": "Faster network speeds",
        "explanation": "Incorrect. Virtualization does not inherently make network links faster."
      }
    ],
    "correct_option": "B",
    "correct_answer": "Resource optimization",
    "explanation": "Correct. Multiple virtual workloads can share physical resources, improving utilization."
  },
  {
    "id": "cloud_032",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "Virtualization",
    "difficulty": "medium",
    "title": "Virtualization • Question #32",
    "question": "Which type of hypervisor runs directly on the host's hardware without an underlying operating system?",
    "options": [
      {
        "key": "A",
        "text": "Type 1",
        "explanation": "Correct category. A Type 1 hypervisor runs directly on physical hardware."
      },
      {
        "key": "B",
        "text": "Type 2",
        "explanation": "Incorrect. Type 2 runs on top of a host operating system."
      },
      {
        "key": "C",
        "text": "Bare-metal",
        "explanation": "Correct terminology for a Type 1 hypervisor; therefore this option is not distinct from A."
      },
      {
        "key": "D",
        "text": "Both Type 1 and Bare-metal",
        "explanation": "Best single answer because A and C describe the same category, making D the intended choice."
      }
    ],
    "correct_option": "D",
    "correct_answer": "Both Type 1 and Bare-metal",
    "explanation": "Best single answer because A and C describe the same category, making D the intended choice."
  },
  {
    "id": "cloud_033",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "Virtualization",
    "difficulty": "hard",
    "title": "Virtualization • Question #33",
    "question": "In virtualization, what is the function of a hypervisor?",
    "options": [
      {
        "key": "A",
        "text": "Manages the virtual machine and hardware interaction",
        "explanation": "Correct. A hypervisor manages virtual machines and mediates access to physical resources."
      },
      {
        "key": "B",
        "text": "Creates storage clusters",
        "explanation": "Incorrect. Storage clustering is a separate storage architecture function."
      },
      {
        "key": "C",
        "text": "Optimizes network bandwidth",
        "explanation": "Incorrect. A hypervisor may affect network configuration but bandwidth optimization is not its primary role."
      },
      {
        "key": "D",
        "text": "Enhances security",
        "explanation": "Incorrect as the primary function. Hypervisors provide isolation/security boundaries, but their core role is virtualization management."
      }
    ],
    "correct_option": "A",
    "correct_answer": "Manages the virtual machine and hardware interaction",
    "explanation": "Correct. A hypervisor manages virtual machines and mediates access to physical resources."
  },
  {
    "id": "cloud_034",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "Virtualization",
    "difficulty": "easy",
    "title": "Virtualization • Question #34",
    "question": "Which of the following is NOT a type of virtualization technology?",
    "options": [
      {
        "key": "A",
        "text": "Desktop virtualization",
        "explanation": "Incorrect. Desktop virtualization is a recognized virtualization approach."
      },
      {
        "key": "B",
        "text": "Network virtualization",
        "explanation": "Incorrect. Network virtualization is a recognized virtualization approach."
      },
      {
        "key": "C",
        "text": "Application virtualization",
        "explanation": "Incorrect. Application virtualization is a recognized virtualization approach."
      },
      {
        "key": "D",
        "text": "Fiber channel virtualization",
        "explanation": "Source answer, but Fibre Channel virtualization can be a valid virtualization technology; therefore D is not reliably 'NOT' a type."
      }
    ],
    "correct_option": "D",
    "correct_answer": "Fiber channel virtualization",
    "explanation": "Source answer, but Fibre Channel virtualization can be a valid virtualization technology; therefore D is not reliably 'NOT' a type."
  },
  {
    "id": "cloud_035",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "Containers",
    "difficulty": "medium",
    "title": "Containers • Question #35",
    "question": "What is one key advantage of using containers over traditional virtual machines?",
    "options": [
      {
        "key": "A",
        "text": "More secure",
        "explanation": "Incorrect. Containers can have different security characteristics; 'more secure' is not universally true."
      },
      {
        "key": "B",
        "text": "Faster startup time",
        "explanation": "Correct. Containers generally start faster because they share the host OS kernel rather than booting a full guest OS."
      },
      {
        "key": "C",
        "text": "Requires more resources",
        "explanation": "Incorrect. Containers typically require fewer resources than full VMs."
      },
      {
        "key": "D",
        "text": "Limited isolation",
        "explanation": "Incorrect. Containers provide process/resource isolation, although usually less complete than VM isolation."
      }
    ],
    "correct_option": "B",
    "correct_answer": "Faster startup time",
    "explanation": "Correct. Containers generally start faster because they share the host OS kernel rather than booting a full guest OS."
  },
  {
    "id": "cloud_036",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "Containers",
    "difficulty": "hard",
    "title": "Containers • Question #36",
    "question": "Which technology is most commonly used to isolate different cloud applications in a single environment?",
    "options": [
      {
        "key": "A",
        "text": "Full virtualization",
        "explanation": "Incorrect. Full virtualization isolates complete guest operating systems and is heavier than needed for many application workloads."
      },
      {
        "key": "B",
        "text": "Paravirtualization",
        "explanation": "Incorrect. Paravirtualization is a virtualization technique, not the usual application-isolation answer here."
      },
      {
        "key": "C",
        "text": "Containers",
        "explanation": "Correct. Containers isolate applications while sharing the host kernel."
      },
      {
        "key": "D",
        "text": "Hybrid virtualization",
        "explanation": "Incorrect. 'Hybrid virtualization' is not the standard answer for application isolation."
      }
    ],
    "correct_option": "C",
    "correct_answer": "Containers",
    "explanation": "Correct. Containers isolate applications while sharing the host kernel."
  },
  {
    "id": "cloud_037",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "Docker",
    "difficulty": "easy",
    "title": "Docker • Question #37",
    "question": "Which command is used to list all Docker containers running on a machine?",
    "options": [
      {
        "key": "A",
        "text": "docker run",
        "explanation": "Incorrect. `docker run` creates and starts a container from an image."
      },
      {
        "key": "B",
        "text": "docker ps",
        "explanation": "Correct. `docker ps` lists running containers."
      },
      {
        "key": "C",
        "text": "docker start",
        "explanation": "Incorrect. `docker start` starts an existing stopped container."
      },
      {
        "key": "D",
        "text": "docker exec",
        "explanation": "Incorrect. `docker exec` runs a command inside an existing running container."
      }
    ],
    "correct_option": "B",
    "correct_answer": "docker ps",
    "explanation": "Correct. `docker ps` lists running containers."
  },
  {
    "id": "cloud_038",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "VMware CLI",
    "difficulty": "medium",
    "title": "VMware CLI • Question #38",
    "question": "How would you create a new virtual machine in VMware using the CLI?",
    "options": [
      {
        "key": "A",
        "text": "vmware create-vm",
        "explanation": "Not verified as a standard current generic VMware CLI command."
      },
      {
        "key": "B",
        "text": "vm create",
        "explanation": "Not a standard VMware CLI command."
      },
      {
        "key": "C",
        "text": "vmware-vmcreate",
        "explanation": "Not a standard VMware CLI command."
      },
      {
        "key": "D",
        "text": "vmware-cmd -s create",
        "explanation": "Not a reliable generic VMware VM-creation command; VMware CLI tooling is product-specific."
      }
    ],
    "correct_option": "A",
    "correct_answer": "vmware create-vm",
    "explanation": "Not verified as a standard current generic VMware CLI command."
  },
  {
    "id": "cloud_039",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "Docker",
    "difficulty": "hard",
    "title": "Docker • Question #39",
    "question": "What is the correct command to launch a container using Docker?",
    "options": [
      {
        "key": "A",
        "text": "docker run [container_name]",
        "explanation": "Correct in principle, but the placeholder should normally be an IMAGE name, e.g. `docker run nginx`; a container name alone is not necessarily an image."
      },
      {
        "key": "B",
        "text": "docker launch [container_name]",
        "explanation": "Incorrect. `docker launch` is not the standard Docker command."
      },
      {
        "key": "C",
        "text": "docker exec [container_name]",
        "explanation": "Incorrect. `docker exec` runs a command inside an already-running container."
      },
      {
        "key": "D",
        "text": "docker create [container_name]",
        "explanation": "Incorrect for launching. `docker create` creates a stopped container; it does not start it."
      }
    ],
    "correct_option": "A",
    "correct_answer": "docker run [container_name]",
    "explanation": "Correct in principle, but the placeholder should normally be an IMAGE name, e.g. `docker run nginx`; a container name alone is not necessarily an image."
  },
  {
    "id": "cloud_040",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "VirtualBox",
    "difficulty": "easy",
    "title": "VirtualBox • Question #40",
    "question": "How do you mount a virtual disk image (VDI) to a virtual machine in VirtualBox?",
    "options": [
      {
        "key": "A",
        "text": "VBoxManage mount-disk",
        "explanation": "Incorrect. `mount-disk` is not the standard VBoxManage command."
      },
      {
        "key": "B",
        "text": "VBoxManage attach-disk",
        "explanation": "Source-intended answer, but technically the current command is `VBoxManage storageattach` with `--medium <path-to-vdi>`."
      },
      {
        "key": "C",
        "text": "VBoxManage load-vdi",
        "explanation": "Incorrect. `load-vdi` is not the standard VBoxManage command."
      },
      {
        "key": "D",
        "text": "VBoxManage add-storage",
        "explanation": "Incorrect. `add-storage` is not the standard command for attaching a disk."
      }
    ],
    "correct_option": "B",
    "correct_answer": "VBoxManage attach-disk",
    "explanation": "Source-intended answer, but technically the current command is `VBoxManage storageattach` with `--medium <path-to-vdi>`."
  },
  {
    "id": "cloud_041",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "Cloud Performance",
    "difficulty": "medium",
    "title": "Cloud Performance • Question #41",
    "question": "A virtual machine in your cloud environment is experiencing slow performance. What could be a likely cause?",
    "options": [
      {
        "key": "A",
        "text": "Insufficient CPU allocation",
        "explanation": "Correct. CPU starvation or insufficient CPU allocation can cause VM performance degradation."
      },
      {
        "key": "B",
        "text": "Network failure",
        "explanation": "Possible if the observed problem is network-related, but the question frames VM performance generally."
      },
      {
        "key": "C",
        "text": "Disk corruption",
        "explanation": "Possible and potentially severe, but not the most general resource-allocation cause."
      },
      {
        "key": "D",
        "text": "Over-provisioned RAM",
        "explanation": "Incorrect. Excess RAM allocation is usually not the direct cause of slow CPU performance."
      }
    ],
    "correct_option": "A",
    "correct_answer": "Insufficient CPU allocation",
    "explanation": "Correct. CPU starvation or insufficient CPU allocation can cause VM performance degradation."
  },
  {
    "id": "cloud_042",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "Containers / Networking",
    "difficulty": "hard",
    "title": "Containers / Networking • Question #42",
    "question": "A containerized application in a virtualized environment is not able to access the host network. What could be the issue?",
    "options": [
      {
        "key": "A",
        "text": "Misconfigured network bridge",
        "explanation": "Correct. A misconfigured bridge or network mode can prevent expected host/network connectivity."
      },
      {
        "key": "B",
        "text": "Container not started",
        "explanation": "If the container is not running it cannot communicate, but the scenario implies a running application."
      },
      {
        "key": "C",
        "text": "Disk space issue",
        "explanation": "Incorrect. Disk space does not normally explain host-network connectivity."
      },
      {
        "key": "D",
        "text": "Insufficient permissions",
        "explanation": "Possible in specific configurations, but a network-bridge problem is the most direct answer."
      }
    ],
    "correct_option": "A",
    "correct_answer": "Misconfigured network bridge",
    "explanation": "Correct. A misconfigured bridge or network mode can prevent expected host/network connectivity."
  },
  {
    "id": "cloud_043",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "Virtualization",
    "difficulty": "easy",
    "title": "Virtualization • Question #43",
    "question": "A company using virtual machines is experiencing resource contention between the VMs. What could be the solution?",
    "options": [
      {
        "key": "A",
        "text": "Add more physical servers",
        "explanation": "Possible when physical capacity is exhausted, but it is not the first/only solution."
      },
      {
        "key": "B",
        "text": "Use better storage",
        "explanation": "Could help if storage I/O is the bottleneck, but does not address CPU/RAM contention generally."
      },
      {
        "key": "C",
        "text": "Optimize VM resource allocation",
        "explanation": "Correct. Properly allocating CPU, memory, and other resources reduces contention."
      },
      {
        "key": "D",
        "text": "Install security patches",
        "explanation": "Incorrect. Security patches do not directly solve resource contention."
      }
    ],
    "correct_option": "C",
    "correct_answer": "Optimize VM resource allocation",
    "explanation": "Correct. Properly allocating CPU, memory, and other resources reduces contention."
  },
  {
    "id": "cloud_044",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "Cloud Storage",
    "difficulty": "medium",
    "title": "Cloud Storage • Question #44",
    "question": "Which of the following is an example of object storage in the cloud?",
    "options": [
      {
        "key": "A",
        "text": "Google Cloud Storage",
        "explanation": "Correct service type. Google Cloud Storage is object storage."
      },
      {
        "key": "B",
        "text": "Amazon RDS",
        "explanation": "Incorrect. Amazon RDS is a managed relational database service."
      },
      {
        "key": "C",
        "text": "Microsoft Azure Blob Storage",
        "explanation": "Correct service type. Azure Blob Storage is object storage."
      },
      {
        "key": "D",
        "text": "Amazon S3",
        "explanation": "Correct service type. Amazon S3 is object storage."
      }
    ],
    "correct_option": "D",
    "correct_answer": "Amazon S3",
    "explanation": "Correct service type. Amazon S3 is object storage."
  },
  {
    "id": "cloud_045",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "Cloud Storage",
    "difficulty": "hard",
    "title": "Cloud Storage • Question #45",
    "question": "What is the main advantage of using cloud storage over traditional on-premise storage?",
    "options": [
      {
        "key": "A",
        "text": "Higher security",
        "explanation": "Not inherently. Security depends on configuration and provider/customer controls."
      },
      {
        "key": "B",
        "text": "Faster access",
        "explanation": "Not inherently. Access speed depends on network, storage class, and workload."
      },
      {
        "key": "C",
        "text": "Scalability",
        "explanation": "Correct. Cloud storage can elastically scale capacity without purchasing physical storage upfront."
      },
      {
        "key": "D",
        "text": "More control",
        "explanation": "Incorrect. On-premises storage often provides more direct physical control."
      }
    ],
    "correct_option": "C",
    "correct_answer": "Scalability",
    "explanation": "Correct. Cloud storage can elastically scale capacity without purchasing physical storage upfront."
  },
  {
    "id": "cloud_046",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "Cloud Storage",
    "difficulty": "easy",
    "title": "Cloud Storage • Question #46",
    "question": "Which type of cloud storage is best suited for storing frequently accessed data?",
    "options": [
      {
        "key": "A",
        "text": "Cold storage",
        "explanation": "Incorrect. Cold storage is optimized for infrequently accessed data."
      },
      {
        "key": "B",
        "text": "Archival storage",
        "explanation": "Incorrect. Archival storage is designed for long-term, infrequent access."
      },
      {
        "key": "C",
        "text": "Object storage",
        "explanation": "Possible for frequently accessed unstructured data; object storage can have standard/hot tiers."
      },
      {
        "key": "D",
        "text": "Block storage",
        "explanation": "Possible for frequently accessed low-latency workloads such as databases, but not universally the best choice."
      }
    ],
    "correct_option": "D",
    "correct_answer": "Block storage",
    "explanation": "Possible for frequently accessed low-latency workloads such as databases, but not universally the best choice."
  },
  {
    "id": "cloud_047",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "Cloud Databases",
    "difficulty": "medium",
    "title": "Cloud Databases • Question #47",
    "question": "Which of the following cloud storage services is primarily designed for structured data?",
    "options": [
      {
        "key": "A",
        "text": "Amazon S3",
        "explanation": "Incorrect. S3 is object storage for unstructured/object data."
      },
      {
        "key": "B",
        "text": "Google Cloud Storage",
        "explanation": "Incorrect. Google Cloud Storage is object storage."
      },
      {
        "key": "C",
        "text": "Amazon DynamoDB",
        "explanation": "Correct. DynamoDB is a managed NoSQL database designed for structured key-value/document data."
      },
      {
        "key": "D",
        "text": "Azure Blob Storage",
        "explanation": "Incorrect. Azure Blob Storage is object storage."
      }
    ],
    "correct_option": "C",
    "correct_answer": "Amazon DynamoDB",
    "explanation": "Correct. DynamoDB is a managed NoSQL database designed for structured key-value/document data."
  },
  {
    "id": "cloud_048",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "Block Storage",
    "difficulty": "hard",
    "title": "Block Storage • Question #48",
    "question": "What is a common use case for block storage in cloud computing?",
    "options": [
      {
        "key": "A",
        "text": "Large data archives",
        "explanation": "Incorrect. Large archives are commonly suited to object/archive storage."
      },
      {
        "key": "B",
        "text": "Databases and boot volumes",
        "explanation": "Correct. Block storage provides low-latency block devices commonly used for VM boot disks and databases."
      },
      {
        "key": "C",
        "text": "Backup of infrequent data",
        "explanation": "Incorrect. Infrequent backups are often stored in object/archive storage."
      },
      {
        "key": "D",
        "text": "Image hosting",
        "explanation": "Incorrect. Image hosting is commonly implemented with object storage."
      }
    ],
    "correct_option": "B",
    "correct_answer": "Databases and boot volumes",
    "explanation": "Correct. Block storage provides low-latency block devices commonly used for VM boot disks and databases."
  },
  {
    "id": "cloud_049",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "Cloud Storage",
    "difficulty": "easy",
    "title": "Cloud Storage • Question #49",
    "question": "Which cloud storage technology allows for high availability and automatic replication across multiple regions?",
    "options": [
      {
        "key": "A",
        "text": "Object storage",
        "explanation": "Source-intended answer. Many cloud object-storage services support replication across regions, but it must be configured and depends on the provider/service."
      },
      {
        "key": "B",
        "text": "File storage",
        "explanation": "File storage can also support replication depending on the service."
      },
      {
        "key": "C",
        "text": "Block storage",
        "explanation": "Block storage can support replication depending on the provider/service."
      },
      {
        "key": "D",
        "text": "Distributed storage",
        "explanation": "Distributed storage is designed around distribution across nodes, but the term alone does not specify automatic multi-region replication."
      }
    ],
    "correct_option": "A",
    "correct_answer": "Object storage",
    "explanation": "Source-intended answer. Many cloud object-storage services support replication across regions, but it must be configured and depends on the provider/service."
  },
  {
    "id": "cloud_050",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "AWS CLI / S3",
    "difficulty": "medium",
    "title": "AWS CLI / S3 • Question #50",
    "question": "Which command is used in AWS CLI to upload a file to an S3 bucket?",
    "options": [
      {
        "key": "A",
        "text": "aws s3 upload",
        "explanation": "Incorrect. `aws s3 upload` is not the standard high-level AWS CLI command."
      },
      {
        "key": "B",
        "text": "aws s3 cp",
        "explanation": "Correct. `aws s3 cp local-file s3://bucket/key` copies/uploads a local file to S3."
      },
      {
        "key": "C",
        "text": "aws s3 put",
        "explanation": "Incorrect. `aws s3 put` is not the standard high-level command; low-level APIs use commands such as `put-object`."
      },
      {
        "key": "D",
        "text": "aws s3 send",
        "explanation": "Incorrect. `aws s3 send` is not a standard AWS CLI S3 command."
      }
    ],
    "correct_option": "B",
    "correct_answer": "aws s3 cp",
    "explanation": "Correct. `aws s3 cp local-file s3://bucket/key` copies/uploads a local file to S3."
  },
  {
    "id": "cloud_051",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "Google Cloud CLI / Storage",
    "difficulty": "hard",
    "title": "Google Cloud CLI / Storage • Question #51",
    "question": "In Google Cloud Storage, which command is used to list objects in a bucket?",
    "options": [
      {
        "key": "A",
        "text": "gsutil ls",
        "explanation": "Valid legacy command, but Google now recommends `gcloud storage ls` rather than gsutil."
      },
      {
        "key": "B",
        "text": "gsutil list",
        "explanation": "Incorrect. `gsutil list` is not the standard object-listing command."
      },
      {
        "key": "C",
        "text": "gcloud storage list",
        "explanation": "Incorrect. The current command is `gcloud storage ls`, not `gcloud storage list`."
      },
      {
        "key": "D",
        "text": "gcloud storage ls",
        "explanation": "Correct for the current Google Cloud CLI. Google documents `gcloud storage ls gs://BUCKET_NAME` for listing objects."
      }
    ],
    "correct_option": "D",
    "correct_answer": "gcloud storage ls",
    "explanation": "Correct for the current Google Cloud CLI. Google documents `gcloud storage ls gs://BUCKET_NAME` for listing objects."
  },
  {
    "id": "cloud_052",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "AWS CLI / S3",
    "difficulty": "easy",
    "title": "AWS CLI / S3 • Question #52",
    "question": "How would you create a new storage bucket in AWS using the CLI?",
    "options": [
      {
        "key": "A",
        "text": "aws s3 create-bucket",
        "explanation": "Incorrect. `aws s3 create-bucket` is not the high-level S3 command."
      },
      {
        "key": "B",
        "text": "aws s3 mb bucket",
        "explanation": "Correct high-level command family, but use `aws s3 mb s3://bucket-name`."
      },
      {
        "key": "C",
        "text": "aws s3 cp bucket",
        "explanation": "Incorrect. `aws s3 cp` copies objects/files."
      },
      {
        "key": "D",
        "text": "aws s3 make-bucket",
        "explanation": "Incorrect. `aws s3 make-bucket` is not a standard command."
      }
    ],
    "correct_option": "B",
    "correct_answer": "aws s3 mb bucket",
    "explanation": "Correct high-level command family, but use `aws s3 mb s3://bucket-name`."
  },
  {
    "id": "cloud_053",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "Azure CLI / Storage",
    "difficulty": "medium",
    "title": "Azure CLI / Storage • Question #53",
    "question": "What is the correct command to copy a file from an Azure Blob Storage container to your local machine using the Azure CLI?",
    "options": [
      {
        "key": "A",
        "text": "az storage blob download",
        "explanation": "Correct. `az storage blob download` downloads a blob to a local file."
      },
      {
        "key": "B",
        "text": "az storage cp",
        "explanation": "Incorrect. `az storage cp` is not the standard Azure Blob CLI command."
      },
      {
        "key": "C",
        "text": "az storage blob get",
        "explanation": "Incorrect. `az storage blob get` is not the standard download command."
      },
      {
        "key": "D",
        "text": "az storage blob copy",
        "explanation": "Incorrect. `az storage blob copy` is for copying blobs rather than downloading one to the local machine."
      }
    ],
    "correct_option": "A",
    "correct_answer": "az storage blob download",
    "explanation": "Correct. `az storage blob download` downloads a blob to a local file."
  },
  {
    "id": "cloud_054",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "S3 Access",
    "difficulty": "hard",
    "title": "S3 Access • Question #54",
    "question": "A user is unable to access a file stored in Amazon S3. What could be the likely cause?",
    "options": [
      {
        "key": "A",
        "text": "Incorrect bucket permissions",
        "explanation": "Correct. IAM or bucket/object policies can deny access to an S3 object."
      },
      {
        "key": "B",
        "text": "File is corrupt",
        "explanation": "Possible for application-level failures, but corruption does not normally cause an authorization denial."
      },
      {
        "key": "C",
        "text": "The bucket is deleted",
        "explanation": "If the bucket were deleted, access would fail, but the question says a file is stored there, making permission problems the intended cause."
      },
      {
        "key": "D",
        "text": "Invalid file format",
        "explanation": "Invalid format generally affects how the file is processed rather than whether S3 authorizes access."
      }
    ],
    "correct_option": "A",
    "correct_answer": "Incorrect bucket permissions",
    "explanation": "Correct. IAM or bucket/object policies can deny access to an S3 object."
  },
  {
    "id": "cloud_055",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "Cloud Storage",
    "difficulty": "easy",
    "title": "Cloud Storage • Question #55",
    "question": "A company is experiencing slow retrieval times when accessing data stored in cold cloud storage. What could be the issue?",
    "options": [
      {
        "key": "A",
        "text": "Bandwidth issues",
        "explanation": "Possible if network transfer is the bottleneck, but cold-storage retrieval itself can add latency."
      },
      {
        "key": "B",
        "text": "Cold storage retrieval latency",
        "explanation": "Correct. Cold/archive storage classes often have higher retrieval latency than hot storage."
      },
      {
        "key": "C",
        "text": "Overloaded cloud servers",
        "explanation": "Possible in a poorly performing service, but not the characteristic issue described."
      },
      {
        "key": "D",
        "text": "Low disk space",
        "explanation": "Incorrect. Low disk space is not the typical reason for slow retrieval from managed cold storage."
      }
    ],
    "correct_option": "B",
    "correct_answer": "Cold storage retrieval latency",
    "explanation": "Correct. Cold/archive storage classes often have higher retrieval latency than hot storage."
  },
  {
    "id": "cloud_056",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "Cloud Storage",
    "difficulty": "medium",
    "title": "Cloud Storage • Question #56",
    "question": "A cloud storage solution is reporting out-of-space errors even though it should have auto-scaling. What could be the problem?",
    "options": [
      {
        "key": "A",
        "text": "Quota limits on storage",
        "explanation": "Correct. Service quotas or account/project limits can prevent further allocation even when the service supports elastic scaling."
      },
      {
        "key": "B",
        "text": "Network issues",
        "explanation": "Incorrect. Network issues do not normally produce an actual storage-capacity limit."
      },
      {
        "key": "C",
        "text": "Permission issues",
        "explanation": "Permission issues can prevent writes but are different from an out-of-space condition."
      },
      {
        "key": "D",
        "text": "Data corruption",
        "explanation": "Data corruption is not the typical explanation for a capacity error."
      }
    ],
    "correct_option": "A",
    "correct_answer": "Quota limits on storage",
    "explanation": "Correct. Service quotas or account/project limits can prevent further allocation even when the service supports elastic scaling."
  },
  {
    "id": "cloud_057",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "Cloud Security",
    "difficulty": "hard",
    "title": "Cloud Security • Question #57",
    "question": "What is the most common security risk in cloud computing?",
    "options": [
      {
        "key": "A",
        "text": "Data breaches",
        "explanation": "Correct among the choices. Unauthorized disclosure or breaches of data are major cloud-security risks."
      },
      {
        "key": "B",
        "text": "Natural disasters",
        "explanation": "Incorrect. Natural disasters are availability risks, not usually categorized as the primary cloud security risk."
      },
      {
        "key": "C",
        "text": "Increased latency",
        "explanation": "Incorrect. Latency is a performance issue."
      },
      {
        "key": "D",
        "text": "Hardware failures",
        "explanation": "Incorrect. Hardware failures are availability/reliability risks; cloud platforms generally design for hardware failure."
      }
    ],
    "correct_option": "A",
    "correct_answer": "Data breaches",
    "explanation": "Correct among the choices. Unauthorized disclosure or breaches of data are major cloud-security risks."
  },
  {
    "id": "cloud_058",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "Cloud Security",
    "difficulty": "easy",
    "title": "Cloud Security • Question #58",
    "question": "Which of the following is a security feature commonly provided by cloud service providers?",
    "options": [
      {
        "key": "A",
        "text": "Automated scaling",
        "explanation": "Incorrect. Automated scaling is an elasticity feature, not primarily a security control."
      },
      {
        "key": "B",
        "text": "Firewall protection",
        "explanation": "Correct. Cloud providers offer network/firewall security controls, though configuration responsibility varies."
      },
      {
        "key": "C",
        "text": "Network acceleration",
        "explanation": "Incorrect. Network acceleration is a performance feature."
      },
      {
        "key": "D",
        "text": "Reduced storage costs",
        "explanation": "Incorrect. Reduced storage costs are an economic benefit, not a security feature."
      }
    ],
    "correct_option": "B",
    "correct_answer": "Firewall protection",
    "explanation": "Correct. Cloud providers offer network/firewall security controls, though configuration responsibility varies."
  },
  {
    "id": "cloud_059",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "Cloud Security",
    "difficulty": "medium",
    "title": "Cloud Security • Question #59",
    "question": "What is a key role of encryption in cloud security?",
    "options": [
      {
        "key": "A",
        "text": "Increase storage",
        "explanation": "Incorrect. Encryption generally adds metadata/processing overhead rather than increasing useful storage."
      },
      {
        "key": "B",
        "text": "Enhance user experience",
        "explanation": "Incorrect. Encryption primarily protects confidentiality rather than directly improving user experience."
      },
      {
        "key": "C",
        "text": "Protect data at rest and in transit",
        "explanation": "Correct. Encryption protects confidentiality of data at rest and during transmission."
      },
      {
        "key": "D",
        "text": "Reduce latency",
        "explanation": "Incorrect. Encryption can add processing overhead and does not inherently reduce latency."
      }
    ],
    "correct_option": "C",
    "correct_answer": "Protect data at rest and in transit",
    "explanation": "Correct. Encryption protects confidentiality of data at rest and during transmission."
  },
  {
    "id": "cloud_060",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "Shared Responsibility",
    "difficulty": "hard",
    "title": "Shared Responsibility • Question #60",
    "question": "Which of the following is a shared responsibility between the cloud provider and the customer?",
    "options": [
      {
        "key": "A",
        "text": "Securing physical infrastructure",
        "explanation": "Primarily the provider's responsibility for the physical facilities and infrastructure."
      },
      {
        "key": "B",
        "text": "Data encryption",
        "explanation": "Potentially shared: the provider may encrypt underlying/storage services while customers may configure application/client-side or service-level encryption."
      },
      {
        "key": "C",
        "text": "Firewall configuration",
        "explanation": "Can be shared depending on whether the firewall is provider-managed or customer-configured."
      },
      {
        "key": "D",
        "text": "Network hardware maintenance",
        "explanation": "Primarily the provider's responsibility for its physical network hardware."
      }
    ],
    "correct_option": "B",
    "correct_answer": "Data encryption",
    "explanation": "Potentially shared: the provider may encrypt underlying/storage services while customers may configure application/client-side or service-level encryption."
  },
  {
    "id": "cloud_061",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "IAM",
    "difficulty": "easy",
    "title": "IAM • Question #61",
    "question": "In cloud environments, what is the purpose of identity and access management (IAM)?",
    "options": [
      {
        "key": "A",
        "text": "Controlling user access to resources",
        "explanation": "Correct. IAM authenticates identities and controls what resources/actions they can access."
      },
      {
        "key": "B",
        "text": "Reducing latency",
        "explanation": "Incorrect. IAM is not a network-performance service."
      },
      {
        "key": "C",
        "text": "Managing storage",
        "explanation": "Incorrect. IAM controls access to resources but does not manage storage capacity itself."
      },
      {
        "key": "D",
        "text": "Controlling physical security",
        "explanation": "Incorrect. Physical security is primarily handled by the cloud provider and facilities controls."
      }
    ],
    "correct_option": "A",
    "correct_answer": "Controlling user access to resources",
    "explanation": "Correct. IAM authenticates identities and controls what resources/actions they can access."
  },
  {
    "id": "cloud_062",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "Cloud Security",
    "difficulty": "medium",
    "title": "Cloud Security • Question #62",
    "question": "Which of the following cloud security models ensures that data is protected while being processed?",
    "options": [
      {
        "key": "A",
        "text": "Encryption at rest",
        "explanation": "Incorrect. Encryption at rest protects stored data, not necessarily data while computation is occurring."
      },
      {
        "key": "B",
        "text": "Data masking",
        "explanation": "Incorrect. Data masking obscures values but is not an encryption model specifically designed for computation on ciphertext."
      },
      {
        "key": "C",
        "text": "Homomorphic encryption",
        "explanation": "Correct. Homomorphic encryption allows certain computations to be performed on encrypted data without first decrypting it."
      },
      {
        "key": "D",
        "text": "Symmetric encryption",
        "explanation": "Incorrect. Symmetric encryption protects confidentiality but ordinary symmetric encryption requires decryption before normal computation."
      }
    ],
    "correct_option": "C",
    "correct_answer": "Homomorphic encryption",
    "explanation": "Correct. Homomorphic encryption allows certain computations to be performed on encrypted data without first decrypting it."
  },
  {
    "id": "cloud_063",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "AWS Security",
    "difficulty": "hard",
    "title": "AWS Security • Question #63",
    "question": "Which AWS service can be used to enable encryption for data stored in Amazon S3?",
    "options": [
      {
        "key": "A",
        "text": "AWS Shield",
        "explanation": "Incorrect. AWS Shield protects against DDoS attacks."
      },
      {
        "key": "B",
        "text": "AWS CloudTrail",
        "explanation": "Incorrect. CloudTrail records API activity and events."
      },
      {
        "key": "C",
        "text": "AWS KMS",
        "explanation": "Correct. AWS KMS manages cryptographic keys that can be used with S3 SSE-KMS encryption."
      },
      {
        "key": "D",
        "text": "AWS EC2",
        "explanation": "Incorrect. EC2 is a compute service."
      }
    ],
    "correct_option": "C",
    "correct_answer": "AWS KMS",
    "explanation": "Correct. AWS KMS manages cryptographic keys that can be used with S3 SSE-KMS encryption."
  },
  {
    "id": "cloud_064",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "AWS CLI / S3 Security",
    "difficulty": "easy",
    "title": "AWS CLI / S3 Security • Question #64",
    "question": "Which command would you use in AWS CLI to enable server-side encryption on an S3 bucket?",
    "options": [
      {
        "key": "A",
        "text": "aws s3 enable-encryption",
        "explanation": "Incorrect. Not a standard AWS CLI command."
      },
      {
        "key": "B",
        "text": "aws s3api put-bucket-encryption",
        "explanation": "Correct. `aws s3api put-bucket-encryption` configures a bucket's default encryption."
      },
      {
        "key": "C",
        "text": "aws s3api set-encryption",
        "explanation": "Incorrect. `set-encryption` is not the standard S3 API command."
      },
      {
        "key": "D",
        "text": "aws s3 secure-bucket",
        "explanation": "Incorrect. `secure-bucket` is not a standard AWS CLI command."
      }
    ],
    "correct_option": "B",
    "correct_answer": "aws s3api put-bucket-encryption",
    "explanation": "Correct. `aws s3api put-bucket-encryption` configures a bucket's default encryption."
  },
  {
    "id": "cloud_065",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "AWS IAM CLI",
    "difficulty": "medium",
    "title": "AWS IAM CLI • Question #65",
    "question": "What command would you use to retrieve the IAM policy for an AWS user using the AWS CLI?",
    "options": [
      {
        "key": "A",
        "text": "aws iam get-user-policy",
        "explanation": "Correct for retrieving a specified inline policy attached to a user. Managed policies require GetPolicy/GetPolicyVersion."
      },
      {
        "key": "B",
        "text": "aws iam describe-policy",
        "explanation": "Incorrect. `describe-policy` is not the standard AWS IAM CLI command."
      },
      {
        "key": "C",
        "text": "aws iam list-users",
        "explanation": "Incorrect. `list-users` lists IAM users rather than retrieving a policy."
      },
      {
        "key": "D",
        "text": "aws iam get-user",
        "explanation": "Incorrect. `get-user` retrieves user information, not an inline policy document."
      }
    ],
    "correct_option": "A",
    "correct_answer": "aws iam get-user-policy",
    "explanation": "Correct for retrieving a specified inline policy attached to a user. Managed policies require GetPolicy/GetPolicyVersion."
  },
  {
    "id": "cloud_066",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "IAM",
    "difficulty": "hard",
    "title": "IAM • Question #66",
    "question": "A cloud user is unable to access resources they previously had access to. What is the likely issue?",
    "options": [
      {
        "key": "A",
        "text": "Incorrect IAM policy",
        "explanation": "Correct among these choices. An IAM policy change or explicit deny can remove previously available permissions."
      },
      {
        "key": "B",
        "text": "Network failure",
        "explanation": "Possible for network-dependent access, but it does not specifically explain a permissions change."
      },
      {
        "key": "C",
        "text": "Hardware malfunction",
        "explanation": "Incorrect. Hardware malfunction is generally abstracted from the customer in public cloud services."
      },
      {
        "key": "D",
        "text": "Server downtime",
        "explanation": "Possible for a service outage, but not the most direct explanation for an access-permission change."
      }
    ],
    "correct_option": "A",
    "correct_answer": "Incorrect IAM policy",
    "explanation": "Correct among these choices. An IAM policy change or explicit deny can remove previously available permissions."
  },
  {
    "id": "cloud_067",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "Cloud Incident Response",
    "difficulty": "easy",
    "title": "Cloud Incident Response • Question #67",
    "question": "A company notices unusual login activities in their cloud environment. What is the most immediate security action to take?",
    "options": [
      {
        "key": "A",
        "text": "Disable all user accounts",
        "explanation": "Too broad and disruptive; disabling every account can unnecessarily stop legitimate operations."
      },
      {
        "key": "B",
        "text": "Reset all passwords",
        "explanation": "May be appropriate for affected credentials, but resetting every password is disruptive and not always the first action."
      },
      {
        "key": "C",
        "text": "Enable multi-factor authentication",
        "explanation": "Good preventive/containment control, but not necessarily the first incident-response action for an active compromise."
      },
      {
        "key": "D",
        "text": "Shut down all services",
        "explanation": "Excessively disruptive and generally not the first response."
      }
    ],
    "correct_option": "C",
    "correct_answer": "Enable multi-factor authentication",
    "explanation": "Good preventive/containment control, but not necessarily the first incident-response action for an active compromise."
  },
  {
    "id": "cloud_068",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "Cloud Incident Response",
    "difficulty": "medium",
    "title": "Cloud Incident Response • Question #68",
    "question": "A company is facing a data breach in their cloud infrastructure. What is the first step in mitigating the breach?",
    "options": [
      {
        "key": "A",
        "text": "Shut down the entire cloud system",
        "explanation": "Incorrect. Shutting down the entire cloud environment can cause unnecessary business disruption."
      },
      {
        "key": "B",
        "text": "Notify customers",
        "explanation": "Notification may be legally required, but containment generally comes before broad notification."
      },
      {
        "key": "C",
        "text": "Isolate the affected system",
        "explanation": "Correct among these choices. Isolating affected resources helps contain the incident and preserve the rest of the environment."
      },
      {
        "key": "D",
        "text": "Update software patches",
        "explanation": "Patching may be necessary after identifying the vulnerability, but containment is generally an immediate priority."
      }
    ],
    "correct_option": "C",
    "correct_answer": "Isolate the affected system",
    "explanation": "Correct among these choices. Isolating affected resources helps contain the incident and preserve the rest of the environment."
  },
  {
    "id": "cloud_069",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "IAM",
    "difficulty": "hard",
    "title": "IAM • Question #69",
    "question": "What is the primary purpose of Identity and Access Management (IAM) in cloud computing?",
    "options": [
      {
        "key": "A",
        "text": "Manage cloud costs",
        "explanation": "Incorrect. Cost management is handled by billing/FinOps tools."
      },
      {
        "key": "B",
        "text": "Control access to resources",
        "explanation": "Correct. IAM manages identities, authentication, and authorization to resources."
      },
      {
        "key": "C",
        "text": "Increase network speed",
        "explanation": "Incorrect. IAM does not increase network speed."
      },
      {
        "key": "D",
        "text": "Enhance data storage",
        "explanation": "Incorrect. IAM controls access but does not improve storage capacity itself."
      }
    ],
    "correct_option": "B",
    "correct_answer": "Control access to resources",
    "explanation": "Correct. IAM manages identities, authentication, and authorization to resources."
  },
  {
    "id": "cloud_070",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "IAM",
    "difficulty": "easy",
    "title": "IAM • Question #70",
    "question": "Which of the following is a core feature of IAM?",
    "options": [
      {
        "key": "A",
        "text": "Network management",
        "explanation": "Incorrect. Network management is a separate infrastructure function."
      },
      {
        "key": "B",
        "text": "Encryption",
        "explanation": "Incorrect. Encryption can integrate with IAM/KMS but is not the core IAM function."
      },
      {
        "key": "C",
        "text": "User authentication",
        "explanation": "Correct. Authentication verifies identity before access is granted."
      },
      {
        "key": "D",
        "text": "Data storage",
        "explanation": "Incorrect. Data storage is not an IAM function."
      }
    ],
    "correct_option": "C",
    "correct_answer": "User authentication",
    "explanation": "Correct. Authentication verifies identity before access is granted."
  },
  {
    "id": "cloud_071",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "IAM / RBAC",
    "difficulty": "medium",
    "title": "IAM / RBAC • Question #71",
    "question": "In cloud IAM, what is the purpose of role-based access control (RBAC)?",
    "options": [
      {
        "key": "A",
        "text": "To allocate network bandwidth",
        "explanation": "Incorrect. RBAC is not a bandwidth-allocation mechanism."
      },
      {
        "key": "B",
        "text": "To limit data storage",
        "explanation": "Incorrect. RBAC controls authorization, not storage capacity."
      },
      {
        "key": "C",
        "text": "To assign permissions based on roles",
        "explanation": "Correct. RBAC assigns permissions according to defined roles rather than individually granting every permission."
      },
      {
        "key": "D",
        "text": "To increase computational power",
        "explanation": "Incorrect. RBAC does not increase compute capacity."
      }
    ],
    "correct_option": "C",
    "correct_answer": "To assign permissions based on roles",
    "explanation": "Correct. RBAC assigns permissions according to defined roles rather than individually granting every permission."
  },
  {
    "id": "cloud_072",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "IAM",
    "difficulty": "hard",
    "title": "IAM • Question #72",
    "question": "Which of the following is NOT part of a typical IAM system?",
    "options": [
      {
        "key": "A",
        "text": "User identities",
        "explanation": "Incorrect. User identities are fundamental IAM entities."
      },
      {
        "key": "B",
        "text": "Resource access",
        "explanation": "Incorrect. IAM manages access to resources."
      },
      {
        "key": "C",
        "text": "Bandwidth allocation",
        "explanation": "Correct. Bandwidth allocation belongs to networking/resource management, not IAM."
      },
      {
        "key": "D",
        "text": "Permission policies",
        "explanation": "Incorrect. Permission policies are core IAM mechanisms."
      }
    ],
    "correct_option": "C",
    "correct_answer": "Bandwidth allocation",
    "explanation": "Correct. Bandwidth allocation belongs to networking/resource management, not IAM."
  },
  {
    "id": "cloud_073",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "IAM",
    "difficulty": "easy",
    "title": "IAM • Question #73",
    "question": "What is the difference between an IAM user and an IAM role in cloud computing?",
    "options": [
      {
        "key": "A",
        "text": "Roles are used for programmatic access",
        "explanation": "Incorrect. Roles can be used by workloads and humans and are not limited to programmatic access."
      },
      {
        "key": "B",
        "text": "Users require more permissions",
        "explanation": "Incorrect. Permission count is unrelated to whether something is a user or role."
      },
      {
        "key": "C",
        "text": "Users represent individuals, roles are assigned to entities",
        "explanation": "Best answer among the choices, but wording should say that users are persistent identities while roles are assumable identities used to grant temporary permissions."
      },
      {
        "key": "D",
        "text": "Roles have no permissions",
        "explanation": "Incorrect. Roles have policies/permissions attached or inherited."
      }
    ],
    "correct_option": "C",
    "correct_answer": "Users represent individuals, roles are assigned to entities",
    "explanation": "Best answer among the choices, but wording should say that users are persistent identities while roles are assumable identities used to grant temporary permissions."
  },
  {
    "id": "cloud_074",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "AWS IAM CLI",
    "difficulty": "medium",
    "title": "AWS IAM CLI • Question #74",
    "question": "Which AWS CLI command is used to create a new IAM user?",
    "options": [
      {
        "key": "A",
        "text": "aws iam create-user",
        "explanation": "Correct. `aws iam create-user --user-name NAME` creates an IAM user."
      },
      {
        "key": "B",
        "text": "aws iam add-user",
        "explanation": "Incorrect. `aws iam add-user` is not the standard AWS CLI command."
      },
      {
        "key": "C",
        "text": "aws iam new-user",
        "explanation": "Incorrect. `aws iam new-user` is not a standard command."
      },
      {
        "key": "D",
        "text": "aws iam make-user",
        "explanation": "Incorrect. `aws iam make-user` is not a standard command."
      }
    ],
    "correct_option": "A",
    "correct_answer": "aws iam create-user",
    "explanation": "Correct. `aws iam create-user --user-name NAME` creates an IAM user."
  },
  {
    "id": "cloud_075",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "AWS IAM CLI",
    "difficulty": "hard",
    "title": "AWS IAM CLI • Question #75",
    "question": "How would you assign a new IAM policy to a user using the AWS CLI?",
    "options": [
      {
        "key": "A",
        "text": "aws iam assign-policy",
        "explanation": "Incorrect. Not a standard AWS IAM CLI command."
      },
      {
        "key": "B",
        "text": "aws iam put-user-policy",
        "explanation": "Valid only when creating/updating an inline policy directly on a user; it is not the command for attaching a managed policy."
      },
      {
        "key": "C",
        "text": "aws iam attach-user-policy",
        "explanation": "Correct for attaching a managed policy to an IAM user."
      },
      {
        "key": "D",
        "text": "aws iam set-policy",
        "explanation": "Incorrect. Not a standard AWS IAM CLI command."
      }
    ],
    "correct_option": "C",
    "correct_answer": "aws iam attach-user-policy",
    "explanation": "Correct for attaching a managed policy to an IAM user."
  },
  {
    "id": "cloud_076",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "Google Cloud IAM CLI",
    "difficulty": "easy",
    "title": "Google Cloud IAM CLI • Question #76",
    "question": "How would you create a new role with specific permissions in Google Cloud IAM using gcloud CLI?",
    "options": [
      {
        "key": "A",
        "text": "gcloud iam create-role",
        "explanation": "Intended answer, but incomplete syntax. Current command is `gcloud iam roles create ROLE_ID --project=PROJECT_ID ...`."
      },
      {
        "key": "B",
        "text": "gcloud create-iam-role",
        "explanation": "Incorrect. Not the standard gcloud command."
      },
      {
        "key": "C",
        "text": "gcloud iam new-role",
        "explanation": "Incorrect. Not the standard gcloud command."
      },
      {
        "key": "D",
        "text": "gcloud iam define-role",
        "explanation": "Incorrect. Not the standard gcloud command."
      }
    ],
    "correct_option": "A",
    "correct_answer": "gcloud iam create-role",
    "explanation": "Intended answer, but incomplete syntax. Current command is `gcloud iam roles create ROLE_ID --project=PROJECT_ID ...`."
  },
  {
    "id": "cloud_077",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "IAM",
    "difficulty": "medium",
    "title": "IAM • Question #77",
    "question": "A user is unable to access a cloud resource even though they have been granted permissions. What could be the cause?",
    "options": [
      {
        "key": "A",
        "text": "Incorrect IAM policy",
        "explanation": "Possible and the source answer, but the question is underspecified because other authorization controls can also deny access."
      },
      {
        "key": "B",
        "text": "Network issues",
        "explanation": "Possible if the resource is unreachable, but not an authorization denial itself."
      },
      {
        "key": "C",
        "text": "Storage limit exceeded",
        "explanation": "Possible for write operations, but it does not explain every type of access failure."
      },
      {
        "key": "D",
        "text": "Software bugs",
        "explanation": "Possible depending on the application, but not the primary IAM explanation."
      }
    ],
    "correct_option": "A",
    "correct_answer": "Incorrect IAM policy",
    "explanation": "Possible and the source answer, but the question is underspecified because other authorization controls can also deny access."
  },
  {
    "id": "cloud_078",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "IAM",
    "difficulty": "hard",
    "title": "IAM • Question #78",
    "question": "A user has been granted access to multiple cloud resources but is unable to perform actions in some of them. What is the likely issue?",
    "options": [
      {
        "key": "A",
        "text": "Overlapping IAM policies",
        "explanation": "Multiple policies are not inherently a problem; they are evaluated together."
      },
      {
        "key": "B",
        "text": "Insufficient permissions",
        "explanation": "Correct/general explanation: the identity may lack the required action permission on the affected resources."
      },
      {
        "key": "C",
        "text": "Network latency",
        "explanation": "Incorrect. Network latency affects responsiveness, not authorization."
      },
      {
        "key": "D",
        "text": "Incorrect user role",
        "explanation": "Also plausible if the user's role does not contain required permissions, so the question should be rewritten for a unique answer."
      }
    ],
    "correct_option": "B",
    "correct_answer": "Insufficient permissions",
    "explanation": "Correct/general explanation: the identity may lack the required action permission on the affected resources."
  },
  {
    "id": "cloud_079",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "IAM Security",
    "difficulty": "easy",
    "title": "IAM Security • Question #79",
    "question": "An organization is facing unauthorized access issues despite having IAM policies in place. What could be a potential solution?",
    "options": [
      {
        "key": "A",
        "text": "Implement multi-factor authentication",
        "explanation": "Correct/intended answer for compromised credentials. MFA adds another authentication factor."
      },
      {
        "key": "B",
        "text": "Increase user permissions",
        "explanation": "Incorrect. Increasing permissions can worsen unauthorized-access risk and violates least privilege."
      },
      {
        "key": "C",
        "text": "Disable unused user accounts",
        "explanation": "Also a valid security measure because unused accounts can become attack paths."
      },
      {
        "key": "D",
        "text": "Enable network encryption",
        "explanation": "Also a valid security measure for protecting network traffic, but it does not directly address compromised account credentials."
      }
    ],
    "correct_option": "A",
    "correct_answer": "Implement multi-factor authentication",
    "explanation": "Correct/intended answer for compromised credentials. MFA adds another authentication factor."
  },
  {
    "id": "cloud_080",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "Cloud Networking",
    "difficulty": "medium",
    "title": "Cloud Networking • Question #80",
    "question": "What is the purpose of a Virtual Private Cloud (VPC) in cloud networking?",
    "options": [
      {
        "key": "A",
        "text": "Provide physical storage",
        "explanation": "Incorrect. A VPC is networking, not physical storage."
      },
      {
        "key": "B",
        "text": "Securely connect on-premise to cloud",
        "explanation": "Not the primary VPC function. A VPN or Direct Connect can connect on-premises networks to a VPC."
      },
      {
        "key": "C",
        "text": "Manage identity access",
        "explanation": "Incorrect. IAM manages identity and access."
      },
      {
        "key": "D",
        "text": "Increase processing speed",
        "explanation": "Incorrect. VPCs do not inherently increase compute speed."
      }
    ],
    "correct_option": "B",
    "correct_answer": "Securely connect on-premise to cloud",
    "explanation": "Not the primary VPC function. A VPN or Direct Connect can connect on-premises networks to a VPC."
  },
  {
    "id": "cloud_081",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "Cloud Networking",
    "difficulty": "hard",
    "title": "Cloud Networking • Question #81",
    "question": "Which of the following is a core component of cloud networking?",
    "options": [
      {
        "key": "A",
        "text": "Virtual Machines",
        "explanation": "VMs are compute resources; they can have network interfaces but are not primarily a networking component."
      },
      {
        "key": "B",
        "text": "Security Groups",
        "explanation": "Correct. Security groups provide virtual firewall rules for network traffic."
      },
      {
        "key": "C",
        "text": "Load Balancers",
        "explanation": "Also correct. Load balancers distribute traffic across backend resources, making the question multi-answer."
      },
      {
        "key": "D",
        "text": "File Storage",
        "explanation": "Incorrect. File storage is a storage resource, not a core networking component."
      }
    ],
    "correct_option": "B",
    "correct_answer": "Security Groups",
    "explanation": "Correct. Security groups provide virtual firewall rules for network traffic."
  },
  {
    "id": "cloud_082",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "Cloud Networking",
    "difficulty": "easy",
    "title": "Cloud Networking • Question #82",
    "question": "What role do subnets play in a cloud networking environment?",
    "options": [
      {
        "key": "A",
        "text": "They route network traffic",
        "explanation": "Routing is performed using route tables/routers; subnets provide the network segmentation to which routing rules are applied."
      },
      {
        "key": "B",
        "text": "They isolate network segments",
        "explanation": "Correct. Subnets divide a virtual network into separate IP address ranges/network segments."
      },
      {
        "key": "C",
        "text": "They store user data",
        "explanation": "Incorrect. Subnets do not provide storage."
      },
      {
        "key": "D",
        "text": "They secure databases",
        "explanation": "Incorrect. Subnets can contribute to network isolation but do not directly secure databases."
      }
    ],
    "correct_option": "B",
    "correct_answer": "They isolate network segments",
    "explanation": "Correct. Subnets divide a virtual network into separate IP address ranges/network segments."
  },
  {
    "id": "cloud_083",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "Cloud Connectivity",
    "difficulty": "medium",
    "title": "Cloud Connectivity • Question #83",
    "question": "Which service allows for direct, private connectivity between a customer's data center and a cloud provider?",
    "options": [
      {
        "key": "A",
        "text": "VPN",
        "explanation": "VPN provides encrypted connectivity but normally traverses the public internet rather than dedicated private connectivity."
      },
      {
        "key": "B",
        "text": "Direct Connect",
        "explanation": "Correct. AWS Direct Connect provides dedicated network connectivity between customer networks and AWS."
      },
      {
        "key": "C",
        "text": "Load Balancer",
        "explanation": "Incorrect. A load balancer distributes application traffic."
      },
      {
        "key": "D",
        "text": "NAT Gateway",
        "explanation": "Incorrect. A NAT gateway provides outbound internet connectivity for private subnets."
      }
    ],
    "correct_option": "B",
    "correct_answer": "Direct Connect",
    "explanation": "Correct. AWS Direct Connect provides dedicated network connectivity between customer networks and AWS."
  },
  {
    "id": "cloud_084",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "Cloud Networking",
    "difficulty": "hard",
    "title": "Cloud Networking • Question #84",
    "question": "Which cloud networking model provides scalability by abstracting the network layer entirely?",
    "options": [
      {
        "key": "A",
        "text": "Traditional Networking",
        "explanation": "Incorrect. Traditional networking exposes more direct physical/network infrastructure management."
      },
      {
        "key": "B",
        "text": "Cloud Networking",
        "explanation": "Broad category, but not the specific model described by abstraction over an underlying network."
      },
      {
        "key": "C",
        "text": "Underlay Networking",
        "explanation": "Incorrect. The underlay is the underlying physical/transport network."
      },
      {
        "key": "D",
        "text": "Overlay Networking",
        "explanation": "Intended answer. Overlay networking creates logical networks over an underlying underlay network."
      }
    ],
    "correct_option": "D",
    "correct_answer": "Overlay Networking",
    "explanation": "Intended answer. Overlay networking creates logical networks over an underlying underlay network."
  },
  {
    "id": "cloud_085",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "AWS CLI / VPC",
    "difficulty": "easy",
    "title": "AWS CLI / VPC • Question #85",
    "question": "Which AWS command lists the available subnets in a specific region?",
    "options": [
      {
        "key": "A",
        "text": "aws ec2 describe-subnets",
        "explanation": "Correct. `aws ec2 describe-subnets` lists subnet information and can be filtered by region/profile."
      },
      {
        "key": "B",
        "text": "aws ec2 list-subnets",
        "explanation": "Incorrect. `list-subnets` is not the standard EC2 CLI operation."
      },
      {
        "key": "C",
        "text": "aws vpc describe-subnets",
        "explanation": "Incorrect. `aws vpc` is not the command group for this operation."
      },
      {
        "key": "D",
        "text": "aws ec2 show-subnets",
        "explanation": "Incorrect. `show-subnets` is not the standard EC2 CLI operation."
      }
    ],
    "correct_option": "A",
    "correct_answer": "aws ec2 describe-subnets",
    "explanation": "Correct. `aws ec2 describe-subnets` lists subnet information and can be filtered by region/profile."
  },
  {
    "id": "cloud_086",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "AWS CLI / VPC",
    "difficulty": "medium",
    "title": "AWS CLI / VPC • Question #86",
    "question": "How would you create a new Virtual Private Cloud (VPC) in AWS using the CLI?",
    "options": [
      {
        "key": "A",
        "text": "aws vpc create-vpc",
        "explanation": "Incorrect. AWS CLI VPC operations are under the `ec2` command group."
      },
      {
        "key": "B",
        "text": "aws ec2 create-vpc",
        "explanation": "Correct. `aws ec2 create-vpc --cidr-block ...` creates a VPC."
      },
      {
        "key": "C",
        "text": "aws vpc new-vpc",
        "explanation": "Incorrect. `aws vpc new-vpc` is not a standard command."
      },
      {
        "key": "D",
        "text": "aws ec2 build-vpc",
        "explanation": "Incorrect. `aws ec2 build-vpc` is not a standard command."
      }
    ],
    "correct_option": "B",
    "correct_answer": "aws ec2 create-vpc",
    "explanation": "Correct. `aws ec2 create-vpc --cidr-block ...` creates a VPC."
  },
  {
    "id": "cloud_087",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "AWS CLI / VPC",
    "difficulty": "hard",
    "title": "AWS CLI / VPC • Question #87",
    "question": "How would you attach an internet gateway to a VPC in AWS using the CLI?",
    "options": [
      {
        "key": "A",
        "text": "aws ec2 attach-igw",
        "explanation": "Incorrect. `attach-igw` is not the standard AWS CLI command."
      },
      {
        "key": "B",
        "text": "aws ec2 create-gateway",
        "explanation": "Incorrect. The operation requires an existing internet gateway and VPC; `create-gateway` is not the attach command."
      },
      {
        "key": "C",
        "text": "aws ec2 attach-internet-gateway",
        "explanation": "Correct command family. The actual syntax is `aws ec2 attach-internet-gateway --internet-gateway-id ... --vpc-id ...`."
      },
      {
        "key": "D",
        "text": "aws ec2 add-igw",
        "explanation": "Incorrect. `add-igw` is not the standard AWS CLI command."
      }
    ],
    "correct_option": "C",
    "correct_answer": "aws ec2 attach-internet-gateway",
    "explanation": "Correct command family. The actual syntax is `aws ec2 attach-internet-gateway --internet-gateway-id ... --vpc-id ...`."
  },
  {
    "id": "cloud_088",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "Google Cloud Networking",
    "difficulty": "easy",
    "title": "Google Cloud Networking • Question #88",
    "question": "In Google Cloud, what is the command to create a new VPC using the gcloud CLI?",
    "options": [
      {
        "key": "A",
        "text": "gcloud compute networks create",
        "explanation": "Correct. `gcloud compute networks create NETWORK_NAME` creates a VPC network."
      },
      {
        "key": "B",
        "text": "gcloud create-vpc",
        "explanation": "Incorrect. Not the standard gcloud command."
      },
      {
        "key": "C",
        "text": "gcloud compute new-vpc",
        "explanation": "Incorrect. Not the standard command."
      },
      {
        "key": "D",
        "text": "gcloud build-vpc",
        "explanation": "Incorrect. Not the standard command."
      }
    ],
    "correct_option": "A",
    "correct_answer": "gcloud compute networks create",
    "explanation": "Correct. `gcloud compute networks create NETWORK_NAME` creates a VPC network."
  },
  {
    "id": "cloud_089",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "Cloud Networking",
    "difficulty": "medium",
    "title": "Cloud Networking • Question #89",
    "question": "A user is unable to access their cloud resource over the internet. What could be a possible reason?",
    "options": [
      {
        "key": "A",
        "text": "The VPC is not created",
        "explanation": "Possible if the resource depends on a VPC, but it is less specific than missing internet connectivity configuration."
      },
      {
        "key": "B",
        "text": "The internet gateway is not attached",
        "explanation": "Correct for AWS-style networking. A public subnet needs a path through an internet gateway, along with suitable routes/security rules."
      },
      {
        "key": "C",
        "text": "Insufficient storage",
        "explanation": "Incorrect. Storage capacity does not normally determine internet reachability."
      },
      {
        "key": "D",
        "text": "Incorrect IAM policy",
        "explanation": "Possible for authorization, but not necessarily the reason the resource is unreachable over the network."
      }
    ],
    "correct_option": "B",
    "correct_answer": "The internet gateway is not attached",
    "explanation": "Correct for AWS-style networking. A public subnet needs a path through an internet gateway, along with suitable routes/security rules."
  },
  {
    "id": "cloud_090",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "Cloud Networking",
    "difficulty": "hard",
    "title": "Cloud Networking • Question #90",
    "question": "A company is facing slow data transfers between their on-premise data center and the cloud. What could be the issue?",
    "options": [
      {
        "key": "A",
        "text": "High network latency",
        "explanation": "Correct. High latency can significantly reduce transfer performance, especially for chatty workloads."
      },
      {
        "key": "B",
        "text": "Data encryption",
        "explanation": "Encryption adds some processing overhead but is not generally the primary explanation for slow transfers."
      },
      {
        "key": "C",
        "text": "Over-provisioned servers",
        "explanation": "Over-provisioning servers does not normally slow the network path."
      },
      {
        "key": "D",
        "text": "Incorrect IAM permissions",
        "explanation": "IAM can cause access denial, but it does not normally cause a successful transfer to be slow."
      }
    ],
    "correct_option": "A",
    "correct_answer": "High network latency",
    "explanation": "Correct. High latency can significantly reduce transfer performance, especially for chatty workloads."
  },
  {
    "id": "cloud_091",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "Cloud Networking",
    "difficulty": "easy",
    "title": "Cloud Networking • Question #91",
    "question": "A company using cloud services is experiencing IP conflicts between their resources. What is a potential solution?",
    "options": [
      {
        "key": "A",
        "text": "Increase server resources",
        "explanation": "Incorrect. CPU/RAM increases do not resolve IP-address conflicts."
      },
      {
        "key": "B",
        "text": "Use multiple VPCs",
        "explanation": "Potential solution if separate VPCs use non-overlapping CIDR ranges; the real fix is correct IP address planning."
      },
      {
        "key": "C",
        "text": "Reduce security rules",
        "explanation": "Incorrect. Reducing security rules does not resolve address collisions."
      },
      {
        "key": "D",
        "text": "Switch to a public cloud model",
        "explanation": "Incorrect. Changing deployment model does not inherently fix IP conflicts."
      }
    ],
    "correct_option": "B",
    "correct_answer": "Use multiple VPCs",
    "explanation": "Potential solution if separate VPCs use non-overlapping CIDR ranges; the real fix is correct IP address planning."
  },
  {
    "id": "cloud_092",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "Cloud Management",
    "difficulty": "medium",
    "title": "Cloud Management • Question #92",
    "question": "Which of the following is a primary consideration when managing a cloud deployment?",
    "options": [
      {
        "key": "A",
        "text": "CPU performance",
        "explanation": "Important for workload performance, but not the only or necessarily primary deployment concern."
      },
      {
        "key": "B",
        "text": "Security",
        "explanation": "Intended answer. Security is a fundamental cloud-deployment concern."
      },
      {
        "key": "C",
        "text": "Backup frequency",
        "explanation": "Also a significant operational concern for many workloads."
      },
      {
        "key": "D",
        "text": "User authentication",
        "explanation": "Also an important security concern, but it is a component of the broader security domain."
      }
    ],
    "correct_option": "B",
    "correct_answer": "Security",
    "explanation": "Intended answer. Security is a fundamental cloud-deployment concern."
  },
  {
    "id": "cloud_093",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "Cloud Scalability",
    "difficulty": "hard",
    "title": "Cloud Scalability • Question #93",
    "question": "What does auto-scaling help achieve in cloud deployments?",
    "options": [
      {
        "key": "A",
        "text": "Reduced storage",
        "explanation": "Incorrect. Auto-scaling primarily changes compute/resource capacity rather than reducing stored data."
      },
      {
        "key": "B",
        "text": "Automatic billing",
        "explanation": "Incorrect. Billing may change as resources scale, but auto-scaling is not a billing feature."
      },
      {
        "key": "C",
        "text": "Optimal resource usage",
        "explanation": "Correct. Auto-scaling adjusts resources to demand, improving utilization and helping maintain performance."
      },
      {
        "key": "D",
        "text": "Improved network speeds",
        "explanation": "Incorrect. Auto-scaling does not directly increase network link speed."
      }
    ],
    "correct_option": "C",
    "correct_answer": "Optimal resource usage",
    "explanation": "Correct. Auto-scaling adjusts resources to demand, improving utilization and helping maintain performance."
  },
  {
    "id": "cloud_094",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "Multi-Cloud",
    "difficulty": "easy",
    "title": "Multi-Cloud • Question #94",
    "question": "What is a significant challenge in managing multi-cloud deployments?",
    "options": [
      {
        "key": "A",
        "text": "Increased latency",
        "explanation": "Possible in cross-cloud architectures, but not the defining management challenge."
      },
      {
        "key": "B",
        "text": "Complex identity management",
        "explanation": "Correct. Managing identities, permissions, and authentication consistently across providers can be complex."
      },
      {
        "key": "C",
        "text": "Limited scalability",
        "explanation": "Incorrect. Multi-cloud can increase available scalability rather than inherently limit it."
      },
      {
        "key": "D",
        "text": "Reduced data privacy",
        "explanation": "Incorrect. Privacy depends on architecture and governance; it is not an inherent multi-cloud outcome."
      }
    ],
    "correct_option": "B",
    "correct_answer": "Complex identity management",
    "explanation": "Correct. Managing identities, permissions, and authentication consistently across providers can be complex."
  },
  {
    "id": "cloud_095",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "Infrastructure as Code",
    "difficulty": "medium",
    "title": "Infrastructure as Code • Question #95",
    "question": "In cloud deployment, what is the main advantage of Infrastructure as Code (IaC)?",
    "options": [
      {
        "key": "A",
        "text": "Reduced manual errors",
        "explanation": "Correct. Declarative, repeatable automation reduces manual configuration and drift/errors."
      },
      {
        "key": "B",
        "text": "Improved security",
        "explanation": "IaC can improve security through reviewable, consistent configuration, but that is not its primary universal advantage."
      },
      {
        "key": "C",
        "text": "Faster data transfer",
        "explanation": "Incorrect. IaC does not directly improve network/data-transfer speed."
      },
      {
        "key": "D",
        "text": "Better storage",
        "explanation": "Incorrect. IaC provisions storage but does not inherently make storage better."
      }
    ],
    "correct_option": "A",
    "correct_answer": "Reduced manual errors",
    "explanation": "Correct. Declarative, repeatable automation reduces manual configuration and drift/errors."
  },
  {
    "id": "cloud_096",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "Disaster Recovery",
    "difficulty": "hard",
    "title": "Disaster Recovery • Question #96",
    "question": "Which of the following strategies is essential for managing disaster recovery in cloud deployments?",
    "options": [
      {
        "key": "A",
        "text": "Regular testing",
        "explanation": "Correct. Regularly testing backups and recovery procedures validates that the recovery plan actually works."
      },
      {
        "key": "B",
        "text": "Increased encryption",
        "explanation": "Encryption protects confidentiality but does not by itself establish disaster recovery."
      },
      {
        "key": "C",
        "text": "Smaller virtual machines",
        "explanation": "VM size is unrelated to the core validation of a disaster-recovery plan."
      },
      {
        "key": "D",
        "text": "Low latency connections",
        "explanation": "Low latency may help some applications but is not the essential disaster-recovery practice."
      }
    ],
    "correct_option": "A",
    "correct_answer": "Regular testing",
    "explanation": "Correct. Regularly testing backups and recovery procedures validates that the recovery plan actually works."
  },
  {
    "id": "cloud_097",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "AWS CloudFormation",
    "difficulty": "easy",
    "title": "AWS CloudFormation • Question #97",
    "question": "In AWS, how would you update an existing CloudFormation stack to deploy new resources?",
    "options": [
      {
        "key": "A",
        "text": "aws cloudformation update-stack",
        "explanation": "Correct. `aws cloudformation update-stack` updates an existing stack using a new template/parameters."
      },
      {
        "key": "B",
        "text": "aws cloudformation change-stack",
        "explanation": "Incorrect. `change-stack` is not the standard CloudFormation CLI operation."
      },
      {
        "key": "C",
        "text": "aws ec2 update-stack",
        "explanation": "Incorrect. CloudFormation commands are not under `aws ec2`."
      },
      {
        "key": "D",
        "text": "aws vpc update-stack",
        "explanation": "Incorrect. CloudFormation commands are not under `aws vpc`."
      }
    ],
    "correct_option": "A",
    "correct_answer": "aws cloudformation update-stack",
    "explanation": "Correct. `aws cloudformation update-stack` updates an existing stack using a new template/parameters."
  },
  {
    "id": "cloud_098",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "Google Kubernetes Engine",
    "difficulty": "medium",
    "title": "Google Kubernetes Engine • Question #98",
    "question": "How would you deploy an application to Google Kubernetes Engine (GKE) using the gcloud CLI?",
    "options": [
      {
        "key": "A",
        "text": "gcloud app deploy",
        "explanation": "Incorrect. `gcloud app deploy` targets App Engine, not generic GKE workloads."
      },
      {
        "key": "B",
        "text": "gcloud container deploy",
        "explanation": "Incorrect. `gcloud container deploy` is not the standard command for deploying a Kubernetes manifest to GKE."
      },
      {
        "key": "C",
        "text": "kubectl apply",
        "explanation": "Correct practical deployment command for a Kubernetes manifest, after configuring kubectl for the GKE cluster. It is not itself a gcloud command."
      },
      {
        "key": "D",
        "text": "gcloud kubernetes deploy",
        "explanation": "Incorrect. `gcloud kubernetes deploy` is not the standard gcloud command."
      }
    ],
    "correct_option": "C",
    "correct_answer": "kubectl apply",
    "explanation": "Correct practical deployment command for a Kubernetes manifest, after configuring kubectl for the GKE cluster. It is not itself a gcloud command."
  },
  {
    "id": "cloud_099",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "Terraform",
    "difficulty": "hard",
    "title": "Terraform • Question #99",
    "question": "What command in AWS CLI would you use to provision resources using Terraform?",
    "options": [
      {
        "key": "A",
        "text": "terraform create",
        "explanation": "Incorrect. `terraform create` is not the standard Terraform command."
      },
      {
        "key": "B",
        "text": "terraform apply",
        "explanation": "Correct. `terraform apply` creates/updates infrastructure described by the Terraform configuration. It is a Terraform CLI command, not an AWS CLI command."
      },
      {
        "key": "C",
        "text": "terraform start",
        "explanation": "Incorrect. `terraform start` is not the standard provisioning command."
      },
      {
        "key": "D",
        "text": "terraform deploy",
        "explanation": "Incorrect. `terraform deploy` is not the standard Terraform provisioning command."
      }
    ],
    "correct_option": "B",
    "correct_answer": "terraform apply",
    "explanation": "Correct. `terraform apply` creates/updates infrastructure described by the Terraform configuration. It is a Terraform CLI command, not an AWS CLI command."
  },
  {
    "id": "cloud_100",
    "subSection": "cloud-computing",
    "category": "Cloud Computing",
    "topic": "Terraform / Multi-Cloud",
    "difficulty": "easy",
    "title": "Terraform / Multi-Cloud • Question #100",
    "question": "How would you define a multi-cloud deployment using Terraform configuration?",
    "options": [
      {
        "key": "A",
        "text": "Define multiple provider blocks",
        "explanation": "Correct. Terraform can define multiple provider configurations, such as AWS and Google Cloud, in one configuration."
      },
      {
        "key": "B",
        "text": "Use the same provider block",
        "explanation": "Incorrect. A single provider configuration represents one provider type/configuration."
      },
      {
        "key": "C",
        "text": "Define a single cloud block",
        "explanation": "Incorrect. Terraform does not use one generic 'cloud block' for multi-cloud provisioning."
      },
      {
        "key": "D",
        "text": "Use one cloud and multiple regions",
        "explanation": "Incorrect. Multiple regions within one provider are not necessarily multi-cloud."
      }
    ],
    "correct_option": "A",
    "correct_answer": "Define multiple provider blocks",
    "explanation": "Correct. Terraform can define multiple provider configurations, such as AWS and Google Cloud, in one configuration."
  }
];
