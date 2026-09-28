// src/data/accenture/computerNetworksData.js
// 120 Verified Questions: OSI/TCP-IP, Ethernet, IP/IPv6 Routing, Protocols, Wireless

export const COMPUTER_NETWORKS_MCQS = [
  {
    "id": "cn-001",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "OSI & TCP/IP Reference Model",
    "difficulty": "easy",
    "title": "OSI & TCP/IP Reference Model • Question #1",
    "question": "What is the fundamental purpose of a computer network?",
    "options": [
      {
        "key": "A",
        "text": "Sharing resources",
        "explanation": "Computer networks let multiple systems share hardware, software, files, and services."
      },
      {
        "key": "B",
        "text": "Storing data",
        "explanation": "Data storage can be provided over a network, but storage itself is not the fundamental purpose of networking."
      },
      {
        "key": "C",
        "text": "Performing calculations",
        "explanation": "Calculations are performed by computers; networking mainly enables communication and resource sharing between them."
      },
      {
        "key": "D",
        "text": "Enhancing security",
        "explanation": "Security can be improved with networking controls, but security is a benefit or function rather than the basic purpose of a network."
      }
    ],
    "correct_option": "A",
    "correct_answer": "Sharing resources",
    "explanation": "Computer networks let multiple systems share hardware, software, files, and services."
  },
  {
    "id": "cn-002",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "OSI & TCP/IP Reference Model",
    "difficulty": "medium",
    "title": "OSI & TCP/IP Reference Model • Question #2",
    "question": "Which topology does the Internet resemble?",
    "options": [
      {
        "key": "A",
        "text": "Ring",
        "explanation": "A ring topology connects nodes in a closed loop, which does not describe the Internet's decentralized structure."
      },
      {
        "key": "B",
        "text": "Bus",
        "explanation": "A bus topology relies on a shared backbone, unlike the Internet's many interconnected networks."
      },
      {
        "key": "C",
        "text": "Star",
        "explanation": "Star topology centers communication around a central device, whereas the Internet has no single central device."
      },
      {
        "key": "D",
        "text": "Mesh",
        "explanation": "Mesh connectivity is the closest simplified description because many independent networks and routers provide multiple interconnected paths."
      }
    ],
    "correct_option": "D",
    "correct_answer": "Mesh",
    "explanation": "Mesh connectivity is the closest simplified description because many independent networks and routers provide multiple interconnected paths."
  },
  {
    "id": "cn-003",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "OSI & TCP/IP Reference Model",
    "difficulty": "hard",
    "title": "OSI & TCP/IP Reference Model • Question #3",
    "question": "What type of network covers a large geographical area, like a city, country, or the world?",
    "options": [
      {
        "key": "A",
        "text": "LAN",
        "explanation": "LAN normally covers a limited local area such as a room, building, or campus segment."
      },
      {
        "key": "B",
        "text": "MAN",
        "explanation": "MAN is designed for a metropolitan area, generally smaller than a country or the global Internet."
      },
      {
        "key": "C",
        "text": "WAN",
        "explanation": "WAN connects networks over large geographic distances, including between cities, countries, and continents."
      },
      {
        "key": "D",
        "text": "PAN",
        "explanation": "PAN is intended for very short-range personal devices such as a phone, watch, or headset."
      }
    ],
    "correct_option": "C",
    "correct_answer": "WAN",
    "explanation": "WAN connects networks over large geographic distances, including between cities, countries, and continents."
  },
  {
    "id": "cn-004",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "OSI & TCP/IP Reference Model",
    "difficulty": "easy",
    "title": "OSI & TCP/IP Reference Model • Question #4",
    "question": "Which device is used to connect different network segments at Layer 2 of a computer network?",
    "options": [
      {
        "key": "A",
        "text": "Repeater",
        "explanation": "A repeater regenerates signals but does not make Layer-2 forwarding decisions between LAN segments."
      },
      {
        "key": "B",
        "text": "Router",
        "explanation": "A router connects different IP networks and makes Layer-3 forwarding decisions."
      },
      {
        "key": "C",
        "text": "Bridge",
        "explanation": "A bridge connects LAN segments at Layer 2; this is the appropriate device when 'network segments' means Ethernet segments."
      },
      {
        "key": "D",
        "text": "Modem",
        "explanation": "A modem primarily converts between digital data and a transmission medium's signaling system; it is not the general Layer-2 segment connector."
      }
    ],
    "correct_option": "C",
    "correct_answer": "Bridge",
    "explanation": "A bridge connects LAN segments at Layer 2; this is the appropriate device when 'network segments' means Ethernet segments."
  },
  {
    "id": "cn-005",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "OSI & TCP/IP Reference Model",
    "difficulty": "medium",
    "title": "OSI & TCP/IP Reference Model • Question #5",
    "question": "What protocol is commonly used for transmitting web pages over the internet?",
    "options": [
      {
        "key": "A",
        "text": "SMTP",
        "explanation": "SMTP is an email transfer protocol, not the normal protocol for retrieving web pages."
      },
      {
        "key": "B",
        "text": "FTP",
        "explanation": "FTP is designed for file transfer rather than ordinary web-page delivery."
      },
      {
        "key": "C",
        "text": "HTTP",
        "explanation": "HTTP is the application protocol used to transfer web resources such as HTML documents."
      },
      {
        "key": "D",
        "text": "SNMP",
        "explanation": "SNMP is used for network management and monitoring rather than web-page transfer."
      }
    ],
    "correct_option": "C",
    "correct_answer": "HTTP",
    "explanation": "HTTP is the application protocol used to transfer web resources such as HTML documents."
  },
  {
    "id": "cn-006",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "OSI & TCP/IP Reference Model",
    "difficulty": "hard",
    "title": "OSI & TCP/IP Reference Model • Question #6",
    "question": "Which OSI layer is primarily responsible for reliable, error-controlled end-to-end delivery?",
    "options": [
      {
        "key": "A",
        "text": "Physical Layer",
        "explanation": "The Physical layer carries raw signals and bits but does not provide end-to-end reliability."
      },
      {
        "key": "B",
        "text": "Data Link Layer",
        "explanation": "The Data Link layer can detect and sometimes recover from frame errors on a local link, but it is not the OSI layer responsible for end-to-end reliable delivery."
      },
      {
        "key": "C",
        "text": "Network Layer",
        "explanation": "The Network layer handles logical addressing and routing rather than reliable end-to-end delivery."
      },
      {
        "key": "D",
        "text": "Transport Layer",
        "explanation": "The Transport layer can provide reliable, ordered end-to-end delivery through mechanisms such as TCP acknowledgments and retransmission."
      }
    ],
    "correct_option": "D",
    "correct_answer": "Transport Layer",
    "explanation": "The Transport layer can provide reliable, ordered end-to-end delivery through mechanisms such as TCP acknowledgments and retransmission."
  },
  {
    "id": "cn-007",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "OSI & TCP/IP Reference Model",
    "difficulty": "easy",
    "title": "OSI & TCP/IP Reference Model • Question #7",
    "question": "In a computer network, what is the main function of the application layer?",
    "options": [
      {
        "key": "A",
        "text": "To provide network services to the applications",
        "explanation": "The Application layer exposes network services and protocols directly to application processes, such as HTTP, DNS, and SMTP."
      },
      {
        "key": "B",
        "text": "To transmit data between network devices",
        "explanation": "Moving data between network devices is handled by lower layers and their forwarding mechanisms."
      },
      {
        "key": "C",
        "text": "To package data for transfer",
        "explanation": "Packaging data for transmission is performed through encapsulation across multiple protocol layers rather than being the Application layer's sole role."
      },
      {
        "key": "D",
        "text": "To route data between networks",
        "explanation": "Routing between networks is primarily a Network-layer function performed by IP routers."
      }
    ],
    "correct_option": "A",
    "correct_answer": "To provide network services to the applications",
    "explanation": "The Application layer exposes network services and protocols directly to application processes, such as HTTP, DNS, and SMTP."
  },
  {
    "id": "cn-008",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "OSI & TCP/IP Reference Model",
    "difficulty": "medium",
    "title": "OSI & TCP/IP Reference Model • Question #8",
    "question": "Which command can be used to view the current IP configuration of a device?",
    "options": [
      {
        "key": "A",
        "text": "ipconfig",
        "explanation": "`ipconfig` is the standard Windows command for displaying interface addressing information."
      },
      {
        "key": "B",
        "text": "ifconfig",
        "explanation": "`ifconfig` is a traditional Unix/Linux command rather than the normal Windows command."
      },
      {
        "key": "C",
        "text": "Both ipconfig and ifconfig",
        "explanation": "Both commands can display interface configuration, but they belong to different operating-system environments."
      },
      {
        "key": "D",
        "text": "netstat",
        "explanation": "`netstat` reports connections, routes, and network statistics rather than serving as the primary IP-configuration command."
      }
    ],
    "correct_option": "C",
    "correct_answer": "Both ipconfig and ifconfig",
    "explanation": "Both commands can display interface configuration, but they belong to different operating-system environments."
  },
  {
    "id": "cn-009",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "OSI & TCP/IP Reference Model",
    "difficulty": "hard",
    "title": "OSI & TCP/IP Reference Model • Question #9",
    "question": "What is the result of executing the ping localhost command?",
    "options": [
      {
        "key": "A",
        "text": "It sends ICMP echo requests to the local machine",
        "explanation": "`ping localhost` sends ICMP Echo traffic to the local host, normally resolving localhost to a loopback address."
      },
      {
        "key": "B",
        "text": "It configures the local machine's IP address",
        "explanation": "`ping` does not configure an interface or change its IP address."
      },
      {
        "key": "C",
        "text": "It displays the routing table",
        "explanation": "Routing-table information is displayed by routing commands such as `route` or `ip route`, not `ping`."
      },
      {
        "key": "D",
        "text": "It clears the DNS cache",
        "explanation": "DNS cache management requires resolver-specific commands; `ping localhost` does not clear DNS caches."
      }
    ],
    "correct_option": "A",
    "correct_answer": "It sends ICMP echo requests to the local machine",
    "explanation": "`ping localhost` sends ICMP Echo traffic to the local host, normally resolving localhost to a loopback address."
  },
  {
    "id": "cn-010",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "OSI & TCP/IP Reference Model",
    "difficulty": "easy",
    "title": "OSI & TCP/IP Reference Model • Question #10",
    "question": "If a computer is unable to access the Internet, but can communicate with local network devices, what should be checked first?",
    "options": [
      {
        "key": "A",
        "text": "Router configuration",
        "explanation": "The router or default-gateway configuration is a logical next check when local connectivity works but Internet destinations do not."
      },
      {
        "key": "B",
        "text": "Cable connections",
        "explanation": "Bad cabling would normally affect local connectivity too, so it is less consistent with the stated symptoms."
      },
      {
        "key": "C",
        "text": "Local firewall settings",
        "explanation": "A local firewall can block Internet traffic, but the gateway is a fundamental dependency between the local network and external networks."
      },
      {
        "key": "D",
        "text": "DNS settings",
        "explanation": "DNS problems affect name resolution; direct Internet access by IP could still work, so DNS is not the first conclusion from the symptoms alone."
      }
    ],
    "correct_option": "A",
    "correct_answer": "Router configuration",
    "explanation": "The router or default-gateway configuration is a logical next check when local connectivity works but Internet destinations do not."
  },
  {
    "id": "cn-011",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "OSI & TCP/IP Reference Model",
    "difficulty": "medium",
    "title": "OSI & TCP/IP Reference Model • Question #11",
    "question": "A computer can ping IP addresses but not domain names. What is likely the issue?",
    "options": [
      {
        "key": "A",
        "text": "IP conflict",
        "explanation": "An IP conflict can cause connectivity problems, but it does not specifically explain successful IP communication combined with failed name resolution."
      },
      {
        "key": "B",
        "text": "Router failure",
        "explanation": "A failed router would generally affect IP connectivity beyond the local network, not just domain-name resolution."
      },
      {
        "key": "C",
        "text": "DNS misconfiguration",
        "explanation": "DNS translates domain names into IP addresses, so broken DNS can coexist with successful direct IP connectivity."
      },
      {
        "key": "D",
        "text": "Faulty Ethernet cable",
        "explanation": "A faulty Ethernet cable would generally disrupt broader network communication rather than only hostname resolution."
      }
    ],
    "correct_option": "C",
    "correct_answer": "DNS misconfiguration",
    "explanation": "DNS translates domain names into IP addresses, so broken DNS can coexist with successful direct IP connectivity."
  },
  {
    "id": "cn-012",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "OSI & TCP/IP Reference Model",
    "difficulty": "hard",
    "title": "OSI & TCP/IP Reference Model • Question #12",
    "question": "Which layer of the OSI model is responsible for establishing, managing, and terminating sessions between applications?",
    "options": [
      {
        "key": "A",
        "text": "Session Layer",
        "explanation": "The Session layer is responsible for establishing, coordinating, and terminating logical sessions between applications in the OSI model."
      },
      {
        "key": "B",
        "text": "Transport Layer",
        "explanation": "The Transport layer provides end-to-end transport services such as reliability and multiplexing, not OSI session management."
      },
      {
        "key": "C",
        "text": "Application Layer",
        "explanation": "The Application layer supplies application-facing network services but is not the OSI layer specifically defined for session control."
      },
      {
        "key": "D",
        "text": "Presentation Layer",
        "explanation": "The Presentation layer handles data representation, translation, encryption, and compression."
      }
    ],
    "correct_option": "A",
    "correct_answer": "Session Layer",
    "explanation": "The Session layer is responsible for establishing, coordinating, and terminating logical sessions between applications in the OSI model."
  },
  {
    "id": "cn-013",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "OSI & TCP/IP Reference Model",
    "difficulty": "easy",
    "title": "OSI & TCP/IP Reference Model • Question #13",
    "question": "What is the primary function of the Network Layer in the OSI model?",
    "options": [
      {
        "key": "A",
        "text": "To provide data routing paths for network communication",
        "explanation": "The Network layer provides logical addressing and determines paths for forwarding packets between networks."
      },
      {
        "key": "B",
        "text": "To format data",
        "explanation": "Formatting or representing data is associated with the Presentation layer rather than Network."
      },
      {
        "key": "C",
        "text": "To establish connections",
        "explanation": "Connection establishment is not the primary Network-layer responsibility; different protocols establish different kinds of connections."
      },
      {
        "key": "D",
        "text": "To encode and decode data",
        "explanation": "Encoding and decoding application data are Presentation-layer concerns."
      }
    ],
    "correct_option": "A",
    "correct_answer": "To provide data routing paths for network communication",
    "explanation": "The Network layer provides logical addressing and determines paths for forwarding packets between networks."
  },
  {
    "id": "cn-014",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "OSI & TCP/IP Reference Model",
    "difficulty": "medium",
    "title": "OSI & TCP/IP Reference Model • Question #14",
    "question": "In the TCP/IP model, which layer corresponds to the OSI model's Physical and Data Link layers?",
    "options": [
      {
        "key": "A",
        "text": "Application",
        "explanation": "The TCP/IP Application layer corresponds broadly to OSI upper-layer functions, not Physical/Data Link."
      },
      {
        "key": "B",
        "text": "Transport",
        "explanation": "The TCP/IP Transport layer maps primarily to the OSI Transport layer."
      },
      {
        "key": "C",
        "text": "Internet",
        "explanation": "The TCP/IP Internet layer corresponds mainly to the OSI Network layer."
      },
      {
        "key": "D",
        "text": "Network Interface",
        "explanation": "The TCP/IP Network Interface/Link layer encompasses functions corresponding to the OSI Data Link and Physical layers."
      }
    ],
    "correct_option": "D",
    "correct_answer": "Network Interface",
    "explanation": "The TCP/IP Network Interface/Link layer encompasses functions corresponding to the OSI Data Link and Physical layers."
  },
  {
    "id": "cn-015",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "OSI & TCP/IP Reference Model",
    "difficulty": "hard",
    "title": "OSI & TCP/IP Reference Model • Question #15",
    "question": "The process of encapsulation involves data moving from which layer to which layer?",
    "options": [
      {
        "key": "A",
        "text": "Application to Physical",
        "explanation": "During encapsulation, application data moves downward through the protocol stack until it is represented as bits on the physical medium."
      },
      {
        "key": "B",
        "text": "Physical to Application",
        "explanation": "Physical-to-Application describes decapsulation in the receiving direction, not normal sending-side encapsulation."
      },
      {
        "key": "C",
        "text": "Transport to Network",
        "explanation": "Transport-to-Network is only one stage of encapsulation, not the complete movement described by the question."
      },
      {
        "key": "D",
        "text": "Network to Transport",
        "explanation": "Network-to-Transport reverses the normal downward order and therefore describes neither standard encapsulation nor the full process."
      }
    ],
    "correct_option": "A",
    "correct_answer": "Application to Physical",
    "explanation": "During encapsulation, application data moves downward through the protocol stack until it is represented as bits on the physical medium."
  },
  {
    "id": "cn-016",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "OSI & TCP/IP Reference Model",
    "difficulty": "easy",
    "title": "OSI & TCP/IP Reference Model • Question #16",
    "question": "Which OSI layer is responsible for error detection and correction at the destination?",
    "options": [
      {
        "key": "A",
        "text": "Transport",
        "explanation": "The Transport layer can detect and recover from transmission problems end-to-end, but the classic OSI layer for frame-level error detection is Data Link."
      },
      {
        "key": "B",
        "text": "Network",
        "explanation": "The Network layer focuses on routing and logical addressing rather than local frame-error handling."
      },
      {
        "key": "C",
        "text": "Data Link",
        "explanation": "The Data Link layer uses mechanisms such as frame checks to detect errors on a link and may provide link-level recovery depending on the protocol."
      },
      {
        "key": "D",
        "text": "Physical",
        "explanation": "The Physical layer transmits signals and bits and has no general responsibility for correcting received frames."
      }
    ],
    "correct_option": "C",
    "correct_answer": "Data Link",
    "explanation": "The Data Link layer uses mechanisms such as frame checks to detect errors on a link and may provide link-level recovery depending on the protocol."
  },
  {
    "id": "cn-017",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "OSI & TCP/IP Reference Model",
    "difficulty": "medium",
    "title": "OSI & TCP/IP Reference Model • Question #17",
    "question": "What does the TCP/IP model's Internet layer do?",
    "options": [
      {
        "key": "A",
        "text": "Manages end-to-end data communication sessions",
        "explanation": "The TCP/IP Internet layer is responsible for IP packet delivery across interconnected networks."
      },
      {
        "key": "B",
        "text": "Routes packets across networks",
        "explanation": "Routing IP packets between networks is the central role of the Internet layer."
      },
      {
        "key": "C",
        "text": "Formats data packets",
        "explanation": "Packet formatting exists at several layers; the Internet layer specifically defines IP packet structure and forwarding."
      },
      {
        "key": "D",
        "text": "Encodes and decodes data",
        "explanation": "Encoding and decoding information representation belongs more closely to Presentation-layer concepts than the TCP/IP Internet layer."
      }
    ],
    "correct_option": "B",
    "correct_answer": "Routes packets across networks",
    "explanation": "Routing IP packets between networks is the central role of the Internet layer."
  },
  {
    "id": "cn-018",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "OSI & TCP/IP Reference Model",
    "difficulty": "hard",
    "title": "OSI & TCP/IP Reference Model • Question #18",
    "question": "Which protocol operates at the Transport Layer of the OSI model to ensure reliable communication?",
    "options": [
      {
        "key": "A",
        "text": "ICMP",
        "explanation": "ICMP is a network-layer control and diagnostic protocol, not a reliable transport protocol."
      },
      {
        "key": "B",
        "text": "IP",
        "explanation": "IP provides best-effort network-layer delivery and does not itself provide reliable transport."
      },
      {
        "key": "C",
        "text": "TCP",
        "explanation": "TCP is a transport-layer protocol that provides connection-oriented, reliable, ordered byte-stream delivery."
      },
      {
        "key": "D",
        "text": "UDP",
        "explanation": "UDP is a transport protocol but intentionally provides a lightweight, connectionless service without TCP-style reliability."
      }
    ],
    "correct_option": "C",
    "correct_answer": "TCP",
    "explanation": "TCP is a transport-layer protocol that provides connection-oriented, reliable, ordered byte-stream delivery."
  },
  {
    "id": "cn-019",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "OSI & TCP/IP Reference Model",
    "difficulty": "easy",
    "title": "OSI & TCP/IP Reference Model • Question #19",
    "question": "Which Presentation Layer function deals with the syntax and representation of exchanged information?",
    "options": [
      {
        "key": "A",
        "text": "It is responsible for session management",
        "explanation": "Session management is associated with the OSI Session layer, not the main distinction of Presentation."
      },
      {
        "key": "B",
        "text": "It deals with syntax and semantics of the information exchanged",
        "explanation": "The Presentation layer deals with the syntax and representation of information so communicating systems can interpret the data consistently."
      },
      {
        "key": "C",
        "text": "It provides encryption and compression",
        "explanation": "Encryption and compression can be Presentation-layer functions, but they are examples of its broader data-representation role rather than the complete distinction."
      },
      {
        "key": "D",
        "text": "It is not implemented in the TCP/IP model",
        "explanation": "The TCP/IP model does not retain separate Presentation and Session layers; their functions are generally folded into upper-layer protocols."
      }
    ],
    "correct_option": "B",
    "correct_answer": "It deals with syntax and semantics of the information exchanged",
    "explanation": "The Presentation layer deals with the syntax and representation of information so communicating systems can interpret the data consistently."
  },
  {
    "id": "cn-020",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "OSI & TCP/IP Reference Model",
    "difficulty": "medium",
    "title": "OSI & TCP/IP Reference Model • Question #20",
    "question": "What feature distinguishes TCP from UDP at the Transport Layer?",
    "options": [
      {
        "key": "A",
        "text": "TCP is faster than UDP",
        "explanation": "UDP is commonly faster or lower-overhead in some situations because it lacks TCP's connection-management and reliability mechanisms; TCP is not inherently faster."
      },
      {
        "key": "B",
        "text": "TCP and UDP use different port numbers",
        "explanation": "TCP and UDP both use port numbers for transport-layer multiplexing, so port numbering does not distinguish them."
      },
      {
        "key": "C",
        "text": "TCP is connection-oriented while UDP is not",
        "explanation": "TCP establishes a connection and provides reliable ordered delivery; UDP is connectionless and does not provide TCP-style reliability."
      },
      {
        "key": "D",
        "text": "TCP uses IP but UDP does not",
        "explanation": "Both TCP and UDP are carried inside IP packets, so TCP is not uniquely dependent on IP."
      }
    ],
    "correct_option": "C",
    "correct_answer": "TCP is connection-oriented while UDP is not",
    "explanation": "TCP establishes a connection and provides reliable ordered delivery; UDP is connectionless and does not provide TCP-style reliability."
  },
  {
    "id": "cn-021",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "OSI & TCP/IP Reference Model",
    "difficulty": "hard",
    "title": "OSI & TCP/IP Reference Model • Question #21",
    "question": "Which command can be used to display the current TCP/IP network configuration?",
    "options": [
      {
        "key": "A",
        "text": "ipconfig /all",
        "explanation": "`ipconfig /all` displays detailed TCP/IP configuration on Windows, including addresses, gateways, and DNS information."
      },
      {
        "key": "B",
        "text": "netstat -r",
        "explanation": "`netstat -r` displays the routing table rather than the complete interface configuration."
      },
      {
        "key": "C",
        "text": "arp -a",
        "explanation": "`arp -a` displays the ARP cache, not the complete TCP/IP configuration."
      },
      {
        "key": "D",
        "text": "tracert",
        "explanation": "`tracert` traces a route to a destination rather than displaying local interface configuration."
      }
    ],
    "correct_option": "A",
    "correct_answer": "ipconfig /all",
    "explanation": "`ipconfig /all` displays detailed TCP/IP configuration on Windows, including addresses, gateways, and DNS information."
  },
  {
    "id": "cn-022",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "OSI & TCP/IP Reference Model",
    "difficulty": "easy",
    "title": "OSI & TCP/IP Reference Model • Question #22",
    "question": "What does the netstat command do?",
    "options": [
      {
        "key": "A",
        "text": "Displays network connections, routing tables, and statistics",
        "explanation": "`netstat` can display active connections, listening ports, routing information, and network statistics depending on the platform and options."
      },
      {
        "key": "B",
        "text": "Configures network interfaces",
        "explanation": "`netstat` reports interface/network state but does not normally configure network interfaces."
      },
      {
        "key": "C",
        "text": "Tests connectivity to a host",
        "explanation": "`ping` is the classic connectivity-testing utility; `netstat` reports local networking state instead."
      },
      {
        "key": "D",
        "text": "Manages firewall settings",
        "explanation": "Firewall configuration is handled by operating-system firewall tools rather than `netstat`."
      }
    ],
    "correct_option": "A",
    "correct_answer": "Displays network connections, routing tables, and statistics",
    "explanation": "`netstat` can display active connections, listening ports, routing information, and network statistics depending on the platform and options."
  },
  {
    "id": "cn-023",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "OSI & TCP/IP Reference Model",
    "difficulty": "medium",
    "title": "OSI & TCP/IP Reference Model • Question #23",
    "question": "Which command is used to test connectivity to a specific IP address and trace the path the packets take?",
    "options": [
      {
        "key": "A",
        "text": "ping",
        "explanation": "`ping` tests reachability but does not show the complete hop-by-hop route."
      },
      {
        "key": "B",
        "text": "arp",
        "explanation": "`arp` examines address-resolution information on the local network rather than tracing a path across routers."
      },
      {
        "key": "C",
        "text": "tracert",
        "explanation": "`tracert` on Windows sends probes with increasing TTL values to reveal the path toward the destination."
      },
      {
        "key": "D",
        "text": "nslookup",
        "explanation": "`nslookup` queries DNS and does not trace the packet path."
      }
    ],
    "correct_option": "C",
    "correct_answer": "tracert",
    "explanation": "`tracert` on Windows sends probes with increasing TTL values to reveal the path toward the destination."
  },
  {
    "id": "cn-024",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "OSI & TCP/IP Reference Model",
    "difficulty": "hard",
    "title": "OSI & TCP/IP Reference Model • Question #24",
    "question": "A device is unable to connect to any network. Which OSI layer should be investigated first?",
    "options": [
      {
        "key": "A",
        "text": "Application",
        "explanation": "Application-layer failures occur after the lower network stack has already established connectivity."
      },
      {
        "key": "B",
        "text": "Presentation",
        "explanation": "Presentation-layer problems affect data representation rather than the basic physical ability to connect."
      },
      {
        "key": "C",
        "text": "Network",
        "explanation": "The Network layer is important for addressing and routing, but a device with no network connectivity should first have its physical link checked."
      },
      {
        "key": "D",
        "text": "Physical",
        "explanation": "The Physical layer is the first troubleshooting point because cable, signal, interface, or link problems can prevent any higher-layer communication."
      }
    ],
    "correct_option": "D",
    "correct_answer": "Physical",
    "explanation": "The Physical layer is the first troubleshooting point because cable, signal, interface, or link problems can prevent any higher-layer communication."
  },
  {
    "id": "cn-025",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "Ethernet & LAN Technologies",
    "difficulty": "easy",
    "title": "Ethernet & LAN Technologies • Question #25",
    "question": "If a computer can connect to local devices but not to the Internet, what might be misconfigured?",
    "options": [
      {
        "key": "A",
        "text": "IP address",
        "explanation": "A wrong IP address can cause connectivity problems, but local-device communication may still occur depending on the exact addressing situation."
      },
      {
        "key": "B",
        "text": "Subnet mask",
        "explanation": "An incorrect subnet mask can prevent correct local-versus-remote destination decisions, but it is not the most direct explanation when local devices are reachable."
      },
      {
        "key": "C",
        "text": "Default gateway",
        "explanation": "The default gateway is the next-hop router used for destinations outside the local subnet; a wrong or missing gateway commonly causes local-only connectivity."
      },
      {
        "key": "D",
        "text": "MAC address",
        "explanation": "A MAC address identifies a local interface at Layer 2 and is not the setting that selects the path to Internet networks."
      }
    ],
    "correct_option": "C",
    "correct_answer": "Default gateway",
    "explanation": "The default gateway is the next-hop router used for destinations outside the local subnet; a wrong or missing gateway commonly causes local-only connectivity."
  },
  {
    "id": "cn-026",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "Ethernet & LAN Technologies",
    "difficulty": "medium",
    "title": "Ethernet & LAN Technologies • Question #26",
    "question": "A web application can send data but cannot receive. What layer could be malfunctioning?",
    "options": [
      {
        "key": "A",
        "text": "Application",
        "explanation": "Application-layer faults can prevent an application from processing received data, but the question asks for a layer involved in transport of the traffic."
      },
      {
        "key": "B",
        "text": "Session",
        "explanation": "The Session layer coordinates application sessions but does not itself implement transport delivery."
      },
      {
        "key": "C",
        "text": "Transport",
        "explanation": "A one-way send/receive problem can indicate Transport-layer trouble because transport protocols manage delivery, acknowledgments, and connection state."
      },
      {
        "key": "D",
        "text": "Presentation",
        "explanation": "The Presentation layer changes data representation; it is not responsible for network delivery in either direction."
      }
    ],
    "correct_option": "C",
    "correct_answer": "Transport",
    "explanation": "A one-way send/receive problem can indicate Transport-layer trouble because transport protocols manage delivery, acknowledgments, and connection state."
  },
  {
    "id": "cn-027",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "Ethernet & LAN Technologies",
    "difficulty": "hard",
    "title": "Ethernet & LAN Technologies • Question #27",
    "question": "What is the primary function of the MAC (Media Access Control) sublayer?",
    "options": [
      {
        "key": "A",
        "text": "Frame delimiting",
        "explanation": "Frame delimiting is a Data Link function, but it is not the primary purpose of the MAC sublayer."
      },
      {
        "key": "B",
        "text": "Error detection",
        "explanation": "Error detection such as Ethernet FCS is associated with the Data Link layer, but not the central purpose of MAC."
      },
      {
        "key": "C",
        "text": "Controlling access to the physical medium",
        "explanation": "The MAC sublayer controls how stations access a shared transmission medium, especially in media-access protocols."
      },
      {
        "key": "D",
        "text": "Physical addressing",
        "explanation": "MAC addresses are used by the MAC sublayer, but physical addressing is an addressing mechanism rather than its complete primary purpose."
      }
    ],
    "correct_option": "C",
    "correct_answer": "Controlling access to the physical medium",
    "explanation": "The MAC sublayer controls how stations access a shared transmission medium, especially in media-access protocols."
  },
  {
    "id": "cn-028",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "Ethernet & LAN Technologies",
    "difficulty": "easy",
    "title": "Ethernet & LAN Technologies • Question #28",
    "question": "What is the standard Ethernet frame size for most networks?",
    "options": [
      {
        "key": "A",
        "text": "64 bytes to 1518 bytes",
        "explanation": "Traditional Ethernet frame size is 64 bytes minimum and 1518 bytes maximum when excluding the optional VLAN tag."
      },
      {
        "key": "B",
        "text": "128 bytes to 1024 bytes",
        "explanation": "128–1024 bytes is not the standard Ethernet frame-size range."
      },
      {
        "key": "C",
        "text": "1500 bytes to 2000 bytes",
        "explanation": "1500 bytes is the common Ethernet payload MTU, not the entire frame range."
      },
      {
        "key": "D",
        "text": "100 bytes to 1500 bytes",
        "explanation": "100–1500 bytes omits the standard minimum frame size and therefore does not describe Ethernet frames."
      }
    ],
    "correct_option": "A",
    "correct_answer": "64 bytes to 1518 bytes",
    "explanation": "Traditional Ethernet frame size is 64 bytes minimum and 1518 bytes maximum when excluding the optional VLAN tag."
  },
  {
    "id": "cn-029",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "Ethernet & LAN Technologies",
    "difficulty": "medium",
    "title": "Ethernet & LAN Technologies • Question #29",
    "question": "In Ethernet networks, what is the purpose of the collision detection mechanism?",
    "options": [
      {
        "key": "A",
        "text": "To encrypt data",
        "explanation": "Encryption protects confidentiality; it does not identify simultaneous transmissions on a shared Ethernet medium."
      },
      {
        "key": "B",
        "text": "To compress data",
        "explanation": "Compression reduces the amount of data transmitted but does not detect collisions."
      },
      {
        "key": "C",
        "text": "To detect and manage when two devices try to send data simultaneously",
        "explanation": "Collision detection identifies the situation in which multiple stations transmit at the same time on a shared medium, as in classic half-duplex CSMA/CD."
      },
      {
        "key": "D",
        "text": "To prioritize data",
        "explanation": "Prioritization determines which traffic is served first and is unrelated to detecting simultaneous transmissions."
      }
    ],
    "correct_option": "C",
    "correct_answer": "To detect and manage when two devices try to send data simultaneously",
    "explanation": "Collision detection identifies the situation in which multiple stations transmit at the same time on a shared medium, as in classic half-duplex CSMA/CD."
  },
  {
    "id": "cn-030",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "Ethernet & LAN Technologies",
    "difficulty": "hard",
    "title": "Ethernet & LAN Technologies • Question #30",
    "question": "Which Ethernet standard provides a speed of 1 Gbps?",
    "options": [
      {
        "key": "A",
        "text": "10BaseT",
        "explanation": "10Base-T operates at 10 Mb/s, far below 1 Gb/s."
      },
      {
        "key": "B",
        "text": "100BaseTX",
        "explanation": "100Base-TX is Fast Ethernet at 100 Mb/s."
      },
      {
        "key": "C",
        "text": "1000BaseT",
        "explanation": "1000Base-T is Gigabit Ethernet and provides 1 Gb/s over suitable twisted-pair cabling."
      },
      {
        "key": "D",
        "text": "10GBaseT",
        "explanation": "10GBase-T provides 10 Gb/s, which is ten times the speed asked for."
      }
    ],
    "correct_option": "C",
    "correct_answer": "1000BaseT",
    "explanation": "1000Base-T is Gigabit Ethernet and provides 1 Gb/s over suitable twisted-pair cabling."
  },
  {
    "id": "cn-031",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "Ethernet & LAN Technologies",
    "difficulty": "easy",
    "title": "Ethernet & LAN Technologies • Question #31",
    "question": "What type of cable is used for most modern Ethernet networks?",
    "options": [
      {
        "key": "A",
        "text": "Coaxial cable",
        "explanation": "Coaxial cable was important in early Ethernet installations but is not the predominant medium for modern switched Ethernet access links."
      },
      {
        "key": "B",
        "text": "Fiber optic cable",
        "explanation": "Fiber optic cable is widely used for high-speed and long-distance links, but ordinary modern Ethernet access commonly uses copper twisted pair."
      },
      {
        "key": "C",
        "text": "Twisted pair cable",
        "explanation": "Twisted-pair copper, especially Cat5e and later categories, is the common physical medium for many modern Ethernet connections."
      },
      {
        "key": "D",
        "text": "None of the above",
        "explanation": "Modern Ethernet commonly uses twisted pair and fiber, so 'none of the above' is incorrect."
      }
    ],
    "correct_option": "C",
    "correct_answer": "Twisted pair cable",
    "explanation": "Twisted-pair copper, especially Cat5e and later categories, is the common physical medium for many modern Ethernet connections."
  },
  {
    "id": "cn-032",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "Ethernet & LAN Technologies",
    "difficulty": "medium",
    "title": "Ethernet & LAN Technologies • Question #32",
    "question": "What does the term 'full-duplex' mean in the context of Ethernet networking?",
    "options": [
      {
        "key": "A",
        "text": "Data can be transmitted in one direction only",
        "explanation": "One-direction-only transmission describes simplex communication rather than full duplex."
      },
      {
        "key": "B",
        "text": "Data can be transmitted in both directions, but not simultaneously",
        "explanation": "Alternating directions without simultaneous transmission is half-duplex."
      },
      {
        "key": "C",
        "text": "Data can be transmitted in both directions simultaneously",
        "explanation": "Full duplex allows transmission in both directions at the same time, eliminating the need for collision detection on that link."
      },
      {
        "key": "D",
        "text": "None of the above",
        "explanation": "There is a standard definition for full-duplex operation, so none of the above is not appropriate."
      }
    ],
    "correct_option": "C",
    "correct_answer": "Data can be transmitted in both directions simultaneously",
    "explanation": "Full duplex allows transmission in both directions at the same time, eliminating the need for collision detection on that link."
  },
  {
    "id": "cn-033",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "Ethernet & LAN Technologies",
    "difficulty": "hard",
    "title": "Ethernet & LAN Technologies • Question #33",
    "question": "How does a switch determine the destination of an Ethernet frame?",
    "options": [
      {
        "key": "A",
        "text": "By using the source IP address",
        "explanation": "Switches do not normally choose an Ethernet output port using the source IP address."
      },
      {
        "key": "B",
        "text": "By using the destination MAC address",
        "explanation": "The destination MAC address is looked up in the switch's MAC address table to select the appropriate output port."
      },
      {
        "key": "C",
        "text": "By using the source MAC address",
        "explanation": "The source MAC address is learned by the switch to build its table; it is not normally the destination-forwarding key."
      },
      {
        "key": "D",
        "text": "By broadcasting to all ports except the source",
        "explanation": "If the destination MAC is unknown or broadcast/multicast rules require it, a switch may flood traffic, but this is not how it normally determines a known destination."
      }
    ],
    "correct_option": "B",
    "correct_answer": "By using the destination MAC address",
    "explanation": "The destination MAC address is looked up in the switch's MAC address table to select the appropriate output port."
  },
  {
    "id": "cn-034",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "Ethernet & LAN Technologies",
    "difficulty": "easy",
    "title": "Ethernet & LAN Technologies • Question #34",
    "question": "In a switched full-duplex Ethernet network, what feature eliminates collisions on the link?",
    "options": [
      {
        "key": "A",
        "text": "Collision detection",
        "explanation": "Collision detection is a mechanism associated with CSMA/CD on shared half-duplex Ethernet, not the defining mechanism of modern switched full-duplex links."
      },
      {
        "key": "B",
        "text": "Full-duplex operation eliminates collisions on the link",
        "explanation": "On a full-duplex switched Ethernet link, each endpoint has separate transmit and receive paths, so simultaneous transmission does not produce a collision."
      },
      {
        "key": "C",
        "text": "Collision avoidance",
        "explanation": "Collision avoidance is associated with mechanisms such as wireless CSMA/CA rather than ordinary full-duplex switched Ethernet."
      },
      {
        "key": "D",
        "text": "Collision management",
        "explanation": "Collision management is not the standard Ethernet mechanism name for eliminating collisions on a full-duplex link."
      }
    ],
    "correct_option": "B",
    "correct_answer": "Full-duplex operation eliminates collisions on the link",
    "explanation": "On a full-duplex switched Ethernet link, each endpoint has separate transmit and receive paths, so simultaneous transmission does not produce a collision."
  },
  {
    "id": "cn-035",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "Ethernet & LAN Technologies",
    "difficulty": "medium",
    "title": "Ethernet & LAN Technologies • Question #35",
    "question": "Which feature distinguishes managed switches from unmanaged switches in an Ethernet network?",
    "options": [
      {
        "key": "A",
        "text": "The ability to encrypt data",
        "explanation": "Managed switches can support security features, but encryption is not what fundamentally distinguishes managed from unmanaged switches."
      },
      {
        "key": "B",
        "text": "The ability to be configured and monitored",
        "explanation": "A managed switch exposes configuration, monitoring, VLAN, diagnostics, and other administrative capabilities that an unmanaged switch generally lacks."
      },
      {
        "key": "C",
        "text": "The use of optical fibers",
        "explanation": "Both managed and unmanaged switches can have copper or optical interfaces, so fiber is not the defining distinction."
      },
      {
        "key": "D",
        "text": "The support for multiple protocols",
        "explanation": "Protocol support varies by model and is not the essential distinction between managed and unmanaged operation."
      }
    ],
    "correct_option": "B",
    "correct_answer": "The ability to be configured and monitored",
    "explanation": "A managed switch exposes configuration, monitoring, VLAN, diagnostics, and other administrative capabilities that an unmanaged switch generally lacks."
  },
  {
    "id": "cn-036",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "Ethernet & LAN Technologies",
    "difficulty": "hard",
    "title": "Ethernet & LAN Technologies • Question #36",
    "question": "Which command can be used to display the MAC address of a network interface on a Windows machine?",
    "options": [
      {
        "key": "A",
        "text": "ipconfig /all",
        "explanation": "`ipconfig /all` shows the physical address/MAC address associated with Windows network adapters."
      },
      {
        "key": "B",
        "text": "ifconfig",
        "explanation": "`ifconfig` is primarily a Unix/Linux utility and is not the standard Windows command."
      },
      {
        "key": "C",
        "text": "arp -a",
        "explanation": "`arp -a` shows IP-to-MAC mappings in the ARP cache, not necessarily the MAC address configuration of every local interface."
      },
      {
        "key": "D",
        "text": "netstat -e",
        "explanation": "`netstat -e` reports Ethernet statistics but is not the normal command for listing adapter MAC addresses."
      }
    ],
    "correct_option": "A",
    "correct_answer": "ipconfig /all",
    "explanation": "`ipconfig /all` shows the physical address/MAC address associated with Windows network adapters."
  },
  {
    "id": "cn-037",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "Ethernet & LAN Technologies",
    "difficulty": "easy",
    "title": "Ethernet & LAN Technologies • Question #37",
    "question": "On a Linux system, which command shows the MAC address of all network interfaces?",
    "options": [
      {
        "key": "A",
        "text": "ip addr",
        "explanation": "`ip addr` displays interface addresses and link-layer information on modern Linux systems, including MAC addresses."
      },
      {
        "key": "B",
        "text": "ifconfig -a",
        "explanation": "`ifconfig -a` displays all interfaces and their hardware addresses on systems where the legacy `ifconfig` utility is installed."
      },
      {
        "key": "C",
        "text": "route",
        "explanation": "`route` displays routing information rather than the MAC address of every interface."
      },
      {
        "key": "D",
        "text": "netstat -i",
        "explanation": "`netstat -i` can show interface statistics but is not the clearest command for listing each interface's MAC address."
      }
    ],
    "correct_option": "B",
    "correct_answer": "ifconfig -a",
    "explanation": "`ifconfig -a` displays all interfaces and their hardware addresses on systems where the legacy `ifconfig` utility is installed."
  },
  {
    "id": "cn-038",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "Ethernet & LAN Technologies",
    "difficulty": "medium",
    "title": "Ethernet & LAN Technologies • Question #38",
    "question": "How can you change the MAC address of a network interface on Linux?",
    "options": [
      {
        "key": "A",
        "text": "Modifying the network configuration file",
        "explanation": "Editing a network configuration can assign a persistent MAC override on some Linux distributions, depending on the network manager and configuration format."
      },
      {
        "key": "B",
        "text": "Using the ifconfig command",
        "explanation": "`ifconfig` can set a hardware address on systems that support the relevant operation, although it is considered a legacy tool."
      },
      {
        "key": "C",
        "text": "Using the macchanger tool",
        "explanation": "`macchanger` is a dedicated utility for changing or spoofing a network interface's MAC address."
      },
      {
        "key": "D",
        "text": "All of the above",
        "explanation": "All three approaches can be used in appropriate Linux environments, although the exact persistent configuration method depends on the distribution."
      }
    ],
    "correct_option": "C",
    "correct_answer": "Using the macchanger tool",
    "explanation": "`macchanger` is a dedicated utility for changing or spoofing a network interface's MAC address."
  },
  {
    "id": "cn-039",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "Ethernet & LAN Technologies",
    "difficulty": "hard",
    "title": "Ethernet & LAN Technologies • Question #39",
    "question": "If a device is not receiving an IP address via DHCP over Ethernet, what layer should be investigated?",
    "options": [
      {
        "key": "A",
        "text": "Application",
        "explanation": "DHCP uses UDP/IP at higher layers, so an IP-address acquisition failure is not primarily an Application-layer issue."
      },
      {
        "key": "B",
        "text": "Presentation",
        "explanation": "Presentation-layer encoding does not determine whether DHCP can obtain an address."
      },
      {
        "key": "C",
        "text": "Network",
        "explanation": "DHCP depends on IP/UDP communication, so Network-layer configuration and packet delivery are relevant to troubleshooting address acquisition."
      },
      {
        "key": "D",
        "text": "Data Link",
        "explanation": "Ethernet delivery must work before DHCP traffic can succeed, making the Data Link layer an important first lower-layer check."
      }
    ],
    "correct_option": "D",
    "correct_answer": "Data Link",
    "explanation": "Ethernet delivery must work before DHCP traffic can succeed, making the Data Link layer an important first lower-layer check."
  },
  {
    "id": "cn-040",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "Ethernet & LAN Technologies",
    "difficulty": "easy",
    "title": "Ethernet & LAN Technologies • Question #40",
    "question": "A computer can access local network devices but not the internet. What should be checked on the switch?",
    "options": [
      {
        "key": "A",
        "text": "VLAN configurations",
        "explanation": "Incorrect VLAN configuration can isolate a switch port from the VLAN or routed network where the Internet gateway is reachable."
      },
      {
        "key": "B",
        "text": "Port speed settings",
        "explanation": "Port-speed mismatches can cause link problems, but they are less specifically suggested when local network access already works."
      },
      {
        "key": "C",
        "text": "Power settings",
        "explanation": "Switch power settings are not normally the cause of a single path to the Internet failing while local switching still works."
      },
      {
        "key": "D",
        "text": "Firmware updates",
        "explanation": "Firmware updates can be useful for known defects, but they are not the first configuration check for this symptom."
      }
    ],
    "correct_option": "A",
    "correct_answer": "VLAN configurations",
    "explanation": "Incorrect VLAN configuration can isolate a switch port from the VLAN or routed network where the Internet gateway is reachable."
  },
  {
    "id": "cn-041",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "Ethernet & LAN Technologies",
    "difficulty": "medium",
    "title": "Ethernet & LAN Technologies • Question #41",
    "question": "What could be a reason for slow data transfer rates over an Ethernet network?",
    "options": [
      {
        "key": "A",
        "text": "Faulty NIC",
        "explanation": "A faulty NIC can introduce errors, retransmissions, or link instability that lowers throughput."
      },
      {
        "key": "B",
        "text": "Cable length exceeds standards",
        "explanation": "Exceeding the cable's supported distance can cause signal degradation and transmission problems."
      },
      {
        "key": "C",
        "text": "Incorrect duplex settings",
        "explanation": "Duplex mismatches can create collisions or late collisions and severely reduce effective throughput."
      },
      {
        "key": "D",
        "text": "All of the above",
        "explanation": "All three conditions can degrade Ethernet performance, so the combined answer is appropriate."
      }
    ],
    "correct_option": "D",
    "correct_answer": "All of the above",
    "explanation": "All three conditions can degrade Ethernet performance, so the combined answer is appropriate."
  },
  {
    "id": "cn-042",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "IP Addressing, IPv6 & Routing",
    "difficulty": "hard",
    "title": "IP Addressing, IPv6 & Routing • Question #42",
    "question": "What is the primary purpose of the Internet Protocol (IP)?",
    "options": [
      {
        "key": "A",
        "text": "To provide error checking and correction",
        "explanation": "IP is a best-effort protocol and does not provide end-to-end error correction."
      },
      {
        "key": "B",
        "text": "To ensure reliable data delivery",
        "explanation": "Reliable delivery is normally provided by a transport protocol such as TCP, not by IP itself."
      },
      {
        "key": "C",
        "text": "To route packets across networks",
        "explanation": "IP provides logical addressing and routes packets across interconnected networks."
      },
      {
        "key": "D",
        "text": "To format data packets",
        "explanation": "IP has packet-format rules, but routing and addressing are its central networking purpose here."
      }
    ],
    "correct_option": "C",
    "correct_answer": "To route packets across networks",
    "explanation": "IP provides logical addressing and routes packets across interconnected networks."
  },
  {
    "id": "cn-043",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "IP Addressing, IPv6 & Routing",
    "difficulty": "easy",
    "title": "IP Addressing, IPv6 & Routing • Question #43",
    "question": "What type of messages are used by ICMP to inform senders of network issues?",
    "options": [
      {
        "key": "A",
        "text": "Query messages",
        "explanation": "ICMP has informational/query messages, but network-error notifications are specifically represented by error-reporting message types."
      },
      {
        "key": "B",
        "text": "Error-reporting messages",
        "explanation": "ICMP error messages report conditions such as destination unreachable, time exceeded, and packet-too-big."
      },
      {
        "key": "C",
        "text": "Routing-update messages",
        "explanation": "ICMP is not a routing protocol and does not distribute routing updates in the way OSPF or BGP does."
      },
      {
        "key": "D",
        "text": "Service-quality messages",
        "explanation": "Service-quality reporting is not the standard category used to describe ICMP's network-error messages."
      }
    ],
    "correct_option": "B",
    "correct_answer": "Error-reporting messages",
    "explanation": "ICMP error messages report conditions such as destination unreachable, time exceeded, and packet-too-big."
  },
  {
    "id": "cn-044",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "IP Addressing, IPv6 & Routing",
    "difficulty": "medium",
    "title": "IP Addressing, IPv6 & Routing • Question #44",
    "question": "Which IP protocol version uses 128-bit addresses?",
    "options": [
      {
        "key": "A",
        "text": "IPv4",
        "explanation": "IPv4 uses 32-bit addresses."
      },
      {
        "key": "B",
        "text": "IPv6",
        "explanation": "IPv6 uses 128-bit addresses, providing a vastly larger address space."
      },
      {
        "key": "C",
        "text": "ARP",
        "explanation": "ARP is an address-resolution protocol rather than an IP version."
      },
      {
        "key": "D",
        "text": "RARP",
        "explanation": "RARP is an older address-resolution/bootstrap protocol and is not a 128-bit IP version."
      }
    ],
    "correct_option": "B",
    "correct_answer": "IPv6",
    "explanation": "IPv6 uses 128-bit addresses, providing a vastly larger address space."
  },
  {
    "id": "cn-045",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "IP Addressing, IPv6 & Routing",
    "difficulty": "hard",
    "title": "IP Addressing, IPv6 & Routing • Question #45",
    "question": "How do routers utilize ICMP messages within the IP framework?",
    "options": [
      {
        "key": "A",
        "text": "To encrypt data packets",
        "explanation": "ICMP does not encrypt IP packets; encryption is supplied by other protocols."
      },
      {
        "key": "B",
        "text": "To prioritize packets",
        "explanation": "Packet prioritization is generally handled through QoS mechanisms rather than ICMP."
      },
      {
        "key": "C",
        "text": "To diagnose routing issues",
        "explanation": "Routers and hosts use ICMP diagnostics to report conditions such as unreachable destinations, time exceeded, and path-MTU problems."
      },
      {
        "key": "D",
        "text": "To compress data packets",
        "explanation": "ICMP does not compress IP packets."
      }
    ],
    "correct_option": "C",
    "correct_answer": "To diagnose routing issues",
    "explanation": "Routers and hosts use ICMP diagnostics to report conditions such as unreachable destinations, time exceeded, and path-MTU problems."
  },
  {
    "id": "cn-046",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "IP Addressing, IPv6 & Routing",
    "difficulty": "easy",
    "title": "IP Addressing, IPv6 & Routing • Question #46",
    "question": "What is the main difference between IPv4 and IPv6?",
    "options": [
      {
        "key": "A",
        "text": "Address size",
        "explanation": "The fundamental addressing difference is size: IPv4 uses 32-bit addresses while IPv6 uses 128-bit addresses."
      },
      {
        "key": "B",
        "text": "Error detection mechanisms",
        "explanation": "Both versions have error-detection considerations, but address size is the defining basic difference asked here."
      },
      {
        "key": "C",
        "text": "Encryption capabilities",
        "explanation": "IPv6 can work with IPsec, but IPv4 can also use IPsec; encryption capability is not the fundamental distinction."
      },
      {
        "key": "D",
        "text": "Transport layer integration",
        "explanation": "Both IPv4 and IPv6 can carry TCP/UDP and other transport protocols, so transport integration is not the main difference."
      }
    ],
    "correct_option": "A",
    "correct_answer": "Address size",
    "explanation": "The fundamental addressing difference is size: IPv4 uses 32-bit addresses while IPv6 uses 128-bit addresses."
  },
  {
    "id": "cn-047",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "IP Addressing, IPv6 & Routing",
    "difficulty": "medium",
    "title": "IP Addressing, IPv6 & Routing • Question #47",
    "question": "Which feature of IPv6 eliminates the need for NAT (Network Address Translation)?",
    "options": [
      {
        "key": "A",
        "text": "Auto-configuration",
        "explanation": "IPv6 autoconfiguration simplifies address assignment but does not itself create the large address space that reduces the need for NAT."
      },
      {
        "key": "B",
        "text": "Built-in encryption",
        "explanation": "IPsec support is not what eliminates address exhaustion and the resulting pressure for NAT."
      },
      {
        "key": "C",
        "text": "The vast address space",
        "explanation": "The enormous IPv6 address space allows globally unique addresses at a scale that makes address-conservation NAT unnecessary for address scarcity."
      },
      {
        "key": "D",
        "text": "Multicast",
        "explanation": "Multicast is a communication feature and does not solve IPv4-style address exhaustion."
      }
    ],
    "correct_option": "C",
    "correct_answer": "The vast address space",
    "explanation": "The enormous IPv6 address space allows globally unique addresses at a scale that makes address-conservation NAT unnecessary for address scarcity."
  },
  {
    "id": "cn-048",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "IP Addressing, IPv6 & Routing",
    "difficulty": "hard",
    "title": "IP Addressing, IPv6 & Routing • Question #48",
    "question": "What is the function of an IP subnet mask?",
    "options": [
      {
        "key": "A",
        "text": "To separate the network address from the host address",
        "explanation": "A subnet mask identifies which bits of an IPv4 address represent the network portion and which represent the host portion."
      },
      {
        "key": "B",
        "text": "To encrypt IP addresses",
        "explanation": "Subnet masks do not encrypt addresses."
      },
      {
        "key": "C",
        "text": "To detect IP conflicts",
        "explanation": "A subnet mask does not itself detect duplicate addresses; conflict detection uses other mechanisms."
      },
      {
        "key": "D",
        "text": "To assign IP addresses automatically",
        "explanation": "Automatic address assignment is normally provided by DHCP or other configuration mechanisms."
      }
    ],
    "correct_option": "A",
    "correct_answer": "To separate the network address from the host address",
    "explanation": "A subnet mask identifies which bits of an IPv4 address represent the network portion and which represent the host portion."
  },
  {
    "id": "cn-049",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "IP Addressing, IPv6 & Routing",
    "difficulty": "easy",
    "title": "IP Addressing, IPv6 & Routing • Question #49",
    "question": "In IPv6, what is the equivalent of ARP (Address Resolution Protocol) used in IPv4?",
    "options": [
      {
        "key": "A",
        "text": "DHCPv6",
        "explanation": "DHCPv6 can configure IPv6 parameters but does not perform the complete neighbor-address resolution role of IPv4 ARP."
      },
      {
        "key": "B",
        "text": "ICMPv6",
        "explanation": "ICMPv6 is the protocol carrying Neighbor Discovery messages, but the named ARP-equivalent mechanism is NDP."
      },
      {
        "key": "C",
        "text": "Neighbor Discovery Protocol (NDP)",
        "explanation": "NDP performs IPv6 neighbor discovery and address resolution using ICMPv6 messages."
      },
      {
        "key": "D",
        "text": "IGMPv6",
        "explanation": "IGMP is an IPv4 multicast group-management protocol; IPv6 uses MLD instead."
      }
    ],
    "correct_option": "C",
    "correct_answer": "Neighbor Discovery Protocol (NDP)",
    "explanation": "NDP performs IPv6 neighbor discovery and address resolution using ICMPv6 messages."
  },
  {
    "id": "cn-050",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "IP Addressing, IPv6 & Routing",
    "difficulty": "medium",
    "title": "IP Addressing, IPv6 & Routing • Question #50",
    "question": "Which IPv6 security protocol provides integrity and data-origin authentication without confidentiality?",
    "options": [
      {
        "key": "A",
        "text": "ESP (Encapsulating Security Payload)",
        "explanation": "ESP can provide confidentiality plus integrity/authentication, but the question specifically asks for integrity and authentication without confidentiality."
      },
      {
        "key": "B",
        "text": "AH (Authentication Header)",
        "explanation": "AH provides connectionless integrity, data-origin authentication, and anti-replay protection without encrypting the payload."
      },
      {
        "key": "C",
        "text": "ICMPv6",
        "explanation": "ICMPv6 is required for IPv6 control and Neighbor Discovery but is not the security mechanism described."
      },
      {
        "key": "D",
        "text": "RARP",
        "explanation": "RARP is an obsolete IPv4-era bootstrap/address-resolution protocol and is unrelated to IPv6 security."
      }
    ],
    "correct_option": "B",
    "correct_answer": "AH (Authentication Header)",
    "explanation": "AH provides connectionless integrity, data-origin authentication, and anti-replay protection without encrypting the payload."
  },
  {
    "id": "cn-051",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "IP Addressing, IPv6 & Routing",
    "difficulty": "hard",
    "title": "IP Addressing, IPv6 & Routing • Question #51",
    "question": "How can you display the current IP configuration on a Unix/Linux system?",
    "options": [
      {
        "key": "A",
        "text": "ipconfig",
        "explanation": "`ipconfig` is primarily associated with Windows rather than Unix/Linux."
      },
      {
        "key": "B",
        "text": "ifconfig",
        "explanation": "`ifconfig` is the traditional Unix/Linux command for viewing interface addresses and configuration."
      },
      {
        "key": "C",
        "text": "netstat -i",
        "explanation": "`netstat -i` reports interface statistics rather than serving as the primary interface-configuration display."
      },
      {
        "key": "D",
        "text": "arp -a",
        "explanation": "`arp -a` shows the ARP cache rather than complete local IP configuration."
      }
    ],
    "correct_option": "B",
    "correct_answer": "ifconfig",
    "explanation": "`ifconfig` is the traditional Unix/Linux command for viewing interface addresses and configuration."
  },
  {
    "id": "cn-052",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "IP Addressing, IPv6 & Routing",
    "difficulty": "easy",
    "title": "IP Addressing, IPv6 & Routing • Question #52",
    "question": "Which command can you use to test IPv6 connectivity to an address?",
    "options": [
      {
        "key": "A",
        "text": "ping6",
        "explanation": "`ping6` is the traditional command used to send ICMPv6 Echo Requests to test IPv6 reachability."
      },
      {
        "key": "B",
        "text": "tracert6",
        "explanation": "`tracert6` is not the standard portable Unix/Linux command for a basic IPv6 ping test."
      },
      {
        "key": "C",
        "text": "arp -6",
        "explanation": "`arp -6` is not the normal command for testing IPv6 connectivity."
      },
      {
        "key": "D",
        "text": "ifconfig -6",
        "explanation": "`ifconfig -6` is not a standard connectivity-test operation; it displays/configures interfaces."
      }
    ],
    "correct_option": "A",
    "correct_answer": "ping6",
    "explanation": "`ping6` is the traditional command used to send ICMPv6 Echo Requests to test IPv6 reachability."
  },
  {
    "id": "cn-053",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "IP Addressing, IPv6 & Routing",
    "difficulty": "medium",
    "title": "IP Addressing, IPv6 & Routing • Question #53",
    "question": "What command provides detailed information about routes to an IPv6 address and discovers MTU along the path?",
    "options": [
      {
        "key": "A",
        "text": "mtr",
        "explanation": "`mtr` combines ping and traceroute-style measurements, but the question specifically asks for the Linux command that reports path MTU discovery."
      },
      {
        "key": "B",
        "text": "tracepath6",
        "explanation": "`tracepath6` traces an IPv6 path and can discover the path MTU using packet-size/PMTU information."
      },
      {
        "key": "C",
        "text": "ip -6 route",
        "explanation": "`ip -6 route` displays IPv6 routing information but does not itself trace the path or discover every hop's MTU."
      },
      {
        "key": "D",
        "text": "netstat -r6",
        "explanation": "`netstat -r6` is not the standard tool for path-MTU discovery."
      }
    ],
    "correct_option": "B",
    "correct_answer": "tracepath6",
    "explanation": "`tracepath6` traces an IPv6 path and can discover the path MTU using packet-size/PMTU information."
  },
  {
    "id": "cn-054",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "IP Addressing, IPv6 & Routing",
    "difficulty": "hard",
    "title": "IP Addressing, IPv6 & Routing • Question #54",
    "question": "A computer can access IPv4 websites but not IPv6 websites. What should be checked first?",
    "options": [
      {
        "key": "A",
        "text": "IPv6 configuration on the computer",
        "explanation": "Checking the local IPv6 configuration is the logical first step because the computer must have usable IPv6 addressing and routing before external IPv6 access can work."
      },
      {
        "key": "B",
        "text": "Router's IPv6 support",
        "explanation": "A router's IPv6 capability matters, but it is normally checked after confirming the host itself has IPv6 enabled and configured."
      },
      {
        "key": "C",
        "text": "IPv6 DNS settings",
        "explanation": "IPv6 DNS matters when names fail to resolve to IPv6 addresses; direct IPv6 access can work without DNS."
      },
      {
        "key": "D",
        "text": "Firewall settings for IPv6",
        "explanation": "An IPv6 firewall can block traffic, but host configuration is a more basic first check."
      }
    ],
    "correct_option": "A",
    "correct_answer": "IPv6 configuration on the computer",
    "explanation": "Checking the local IPv6 configuration is the logical first step because the computer must have usable IPv6 addressing and routing before external IPv6 access can work."
  },
  {
    "id": "cn-055",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "IP Addressing, IPv6 & Routing",
    "difficulty": "easy",
    "title": "IP Addressing, IPv6 & Routing • Question #55",
    "question": "You're unable to ping an IPv6 address from your machine. What could be the issue?",
    "options": [
      {
        "key": "A",
        "text": "Incorrect subnet mask",
        "explanation": "IPv6 does not use an IPv4-style subnet mask; it uses prefix lengths, so this wording does not describe the normal IPv6 configuration."
      },
      {
        "key": "B",
        "text": "Firewall blocking ICMPv6 packets",
        "explanation": "Blocking ICMPv6 can break ping and also interfere with important IPv6 control functions such as Neighbor Discovery and Path MTU Discovery."
      },
      {
        "key": "C",
        "text": "Incorrect gateway",
        "explanation": "An incorrect IPv6 default gateway or route can prevent communication beyond the local link."
      },
      {
        "key": "D",
        "text": "All of the above",
        "explanation": "Multiple listed conditions can prevent IPv6 connectivity, so the combined answer is appropriate."
      }
    ],
    "correct_option": "D",
    "correct_answer": "All of the above",
    "explanation": "Multiple listed conditions can prevent IPv6 connectivity, so the combined answer is appropriate."
  },
  {
    "id": "cn-056",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "IP Addressing, IPv6 & Routing",
    "difficulty": "medium",
    "title": "IP Addressing, IPv6 & Routing • Question #56",
    "question": "How to resolve intermittent connectivity issues with an IPv6 network?",
    "options": [
      {
        "key": "A",
        "text": "Replacing the router",
        "explanation": "Replacing a router may solve a hardware fault, but it is not the only or first remedy for intermittent IPv6 problems."
      },
      {
        "key": "B",
        "text": "Updating network drivers and firmware",
        "explanation": "Outdated drivers or firmware can introduce link and protocol interoperability problems."
      },
      {
        "key": "C",
        "text": "Checking for IPv6 prefix delegation issues",
        "explanation": "Incorrect or unstable IPv6 prefix delegation can cause addresses/routes to change incorrectly and produce intermittent connectivity."
      },
      {
        "key": "D",
        "text": "All of the above",
        "explanation": "All three troubleshooting/remediation actions can be appropriate depending on the diagnosed cause."
      }
    ],
    "correct_option": "D",
    "correct_answer": "All of the above",
    "explanation": "All three troubleshooting/remediation actions can be appropriate depending on the diagnosed cause."
  },
  {
    "id": "cn-057",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "IP Addressing, IPv6 & Routing",
    "difficulty": "hard",
    "title": "IP Addressing, IPv6 & Routing • Question #57",
    "question": "What is the primary purpose of routing protocols in a network?",
    "options": [
      {
        "key": "A",
        "text": "To encrypt data",
        "explanation": "Routing protocols do not encrypt application traffic."
      },
      {
        "key": "B",
        "text": "To compress data",
        "explanation": "Compression is not the purpose of routing protocols."
      },
      {
        "key": "C",
        "text": "To determine optimal data paths",
        "explanation": "Routing protocols exchange reachability information so routers can select usable paths toward destinations."
      },
      {
        "key": "D",
        "text": "To manage user permissions",
        "explanation": "User permissions belong to access-control and identity systems, not routing protocols."
      }
    ],
    "correct_option": "C",
    "correct_answer": "To determine optimal data paths",
    "explanation": "Routing protocols exchange reachability information so routers can select usable paths toward destinations."
  },
  {
    "id": "cn-058",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "IP Addressing, IPv6 & Routing",
    "difficulty": "easy",
    "title": "IP Addressing, IPv6 & Routing • Question #58",
    "question": "Which type of routing algorithm does OSPF use?",
    "options": [
      {
        "key": "A",
        "text": "Distance-vector",
        "explanation": "Distance-vector protocols exchange distance information rather than building a complete link-state database."
      },
      {
        "key": "B",
        "text": "Link-state",
        "explanation": "OSPF is a link-state routing protocol that uses LSAs and an SPF calculation."
      },
      {
        "key": "C",
        "text": "Path-vector",
        "explanation": "Path-vector routing is characteristic of BGP rather than OSPF."
      },
      {
        "key": "D",
        "text": "Hybrid",
        "explanation": "OSPF is not normally classified as a hybrid routing protocol."
      }
    ],
    "correct_option": "B",
    "correct_answer": "Link-state",
    "explanation": "OSPF is a link-state routing protocol that uses LSAs and an SPF calculation."
  },
  {
    "id": "cn-059",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "IP Addressing, IPv6 & Routing",
    "difficulty": "medium",
    "title": "IP Addressing, IPv6 & Routing • Question #59",
    "question": "What differentiates dynamic routing from static routing?",
    "options": [
      {
        "key": "A",
        "text": "Dynamic routing is less secure",
        "explanation": "Dynamic routing is not inherently less secure; security depends on protocol configuration and controls."
      },
      {
        "key": "B",
        "text": "Static routing automatically updates",
        "explanation": "Static routes do not automatically adapt to topology changes."
      },
      {
        "key": "C",
        "text": "Dynamic routing automatically updates routes",
        "explanation": "Dynamic routing protocols can learn and update routes as network reachability changes."
      },
      {
        "key": "D",
        "text": "Static routing is faster",
        "explanation": "Static routing can be predictable and efficient but is not categorically faster than dynamic routing."
      }
    ],
    "correct_option": "C",
    "correct_answer": "Dynamic routing automatically updates routes",
    "explanation": "Dynamic routing protocols can learn and update routes as network reachability changes."
  },
  {
    "id": "cn-060",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "IP Addressing, IPv6 & Routing",
    "difficulty": "hard",
    "title": "IP Addressing, IPv6 & Routing • Question #60",
    "question": "In BGP, which attribute is used to record the sequence of autonomous systems a route has traversed?",
    "options": [
      {
        "key": "A",
        "text": "Path length",
        "explanation": "AS_PATH length is important in BGP best-path selection, but it is not the only attribute and is not always the first criterion considered."
      },
      {
        "key": "B",
        "text": "Bandwidth",
        "explanation": "BGP does not select paths simply by the raw bandwidth of an interface."
      },
      {
        "key": "C",
        "text": "Lowest cost",
        "explanation": "Generic lowest-cost routing is not the BGP best-path rule used across the Internet."
      },
      {
        "key": "D",
        "text": "Number of AS hops",
        "explanation": "The number of AS hops corresponds to AS_PATH length and is one of BGP's path-selection criteria."
      }
    ],
    "correct_option": "D",
    "correct_answer": "Number of AS hops",
    "explanation": "The number of AS hops corresponds to AS_PATH length and is one of BGP's path-selection criteria."
  },
  {
    "id": "cn-061",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "IP Addressing, IPv6 & Routing",
    "difficulty": "easy",
    "title": "IP Addressing, IPv6 & Routing • Question #61",
    "question": "In RIP, which metric is used to determine the best route?",
    "options": [
      {
        "key": "A",
        "text": "By counting hops",
        "explanation": "RIP uses hop count as its routing metric; a route with fewer hops is preferred subject to the protocol's limits."
      },
      {
        "key": "B",
        "text": "By measuring latency",
        "explanation": "Latency is not the RIP metric."
      },
      {
        "key": "C",
        "text": "By bandwidth",
        "explanation": "Bandwidth is not the metric used by RIP to select its route."
      },
      {
        "key": "D",
        "text": "By using a cost metric",
        "explanation": "Other distance-vector protocols can use different metrics, so 'cost metric' is too broad for this RIP-specific question."
      }
    ],
    "correct_option": "A",
    "correct_answer": "By counting hops",
    "explanation": "RIP uses hop count as its routing metric; a route with fewer hops is preferred subject to the protocol's limits."
  },
  {
    "id": "cn-062",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "IP Addressing, IPv6 & Routing",
    "difficulty": "medium",
    "title": "IP Addressing, IPv6 & Routing • Question #62",
    "question": "What is the primary benefit of using a routing protocol like EIGRP compared to RIP?",
    "options": [
      {
        "key": "A",
        "text": "Faster convergence",
        "explanation": "EIGRP generally converges faster than RIP because it maintains richer topology information and uses DUAL for route computation."
      },
      {
        "key": "B",
        "text": "Higher security",
        "explanation": "Neither protocol's main advantage is simply higher security."
      },
      {
        "key": "C",
        "text": "Simpler configuration",
        "explanation": "EIGRP is more feature-rich and can be more complex than RIP rather than being defined by simpler configuration."
      },
      {
        "key": "D",
        "text": "Less bandwidth usage",
        "explanation": "RIP's periodic updates can consume bandwidth; EIGRP's event-driven behavior can be more efficient, but faster convergence is the clearest stated benefit."
      }
    ],
    "correct_option": "A",
    "correct_answer": "Faster convergence",
    "explanation": "EIGRP generally converges faster than RIP because it maintains richer topology information and uses DUAL for route computation."
  },
  {
    "id": "cn-063",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "IP Addressing, IPv6 & Routing",
    "difficulty": "hard",
    "title": "IP Addressing, IPv6 & Routing • Question #63",
    "question": "Which routing protocol is classified as an Exterior Gateway Protocol (EGP)?",
    "options": [
      {
        "key": "A",
        "text": "OSPF",
        "explanation": "OSPF is an Interior Gateway Protocol used within an autonomous system."
      },
      {
        "key": "B",
        "text": "EIGRP",
        "explanation": "EIGRP is an Interior Gateway Protocol rather than an exterior gateway protocol."
      },
      {
        "key": "C",
        "text": "BGP",
        "explanation": "BGP is the standard inter-domain routing protocol and is classified as an Exterior Gateway Protocol."
      },
      {
        "key": "D",
        "text": "RIP",
        "explanation": "RIP is an Interior Gateway Protocol."
      }
    ],
    "correct_option": "C",
    "correct_answer": "BGP",
    "explanation": "BGP is the standard inter-domain routing protocol and is classified as an Exterior Gateway Protocol."
  },
  {
    "id": "cn-064",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "IP Addressing, IPv6 & Routing",
    "difficulty": "easy",
    "title": "IP Addressing, IPv6 & Routing • Question #64",
    "question": "Which OSPF mechanism distributes link-state information used to calculate loop-free paths?",
    "options": [
      {
        "key": "A",
        "text": "Split horizon",
        "explanation": "Split horizon is a distance-vector loop-avoidance technique, not the core OSPF mechanism."
      },
      {
        "key": "B",
        "text": "Route poisoning",
        "explanation": "Route poisoning is another distance-vector loop-prevention technique."
      },
      {
        "key": "C",
        "text": "Link-state advertisement",
        "explanation": "OSPF distributes link-state advertisements describing topology; routers use this information to calculate loop-free shortest paths."
      },
      {
        "key": "D",
        "text": "Area designations",
        "explanation": "OSPF areas improve scalability and hierarchy, but area designation itself is not the loop-prevention mechanism."
      }
    ],
    "correct_option": "C",
    "correct_answer": "Link-state advertisement",
    "explanation": "OSPF distributes link-state advertisements describing topology; routers use this information to calculate loop-free shortest paths."
  },
  {
    "id": "cn-065",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "IP Addressing, IPv6 & Routing",
    "difficulty": "medium",
    "title": "IP Addressing, IPv6 & Routing • Question #65",
    "question": "In BGP, what is the purpose of the AS_PATH attribute?",
    "options": [
      {
        "key": "A",
        "text": "To encrypt data packets",
        "explanation": "AS_PATH is not an encryption field."
      },
      {
        "key": "B",
        "text": "To specify the priority of routes",
        "explanation": "Route preference can be influenced by several BGP attributes, but AS_PATH specifically records the AS sequence."
      },
      {
        "key": "C",
        "text": "To record the path of ASes",
        "explanation": "AS_PATH records the autonomous systems through which the route advertisement has passed."
      },
      {
        "key": "D",
        "text": "To specify the route source",
        "explanation": "The origin/source of a route is represented through other BGP attributes such as ORIGIN; AS_PATH specifically describes the AS sequence."
      }
    ],
    "correct_option": "C",
    "correct_answer": "To record the path of ASes",
    "explanation": "AS_PATH records the autonomous systems through which the route advertisement has passed."
  },
  {
    "id": "cn-066",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "IP Addressing, IPv6 & Routing",
    "difficulty": "hard",
    "title": "IP Addressing, IPv6 & Routing • Question #66",
    "question": "Which command can display the routing table on a Cisco router?",
    "options": [
      {
        "key": "A",
        "text": "show ip route",
        "explanation": "`show ip route` is the standard Cisco IOS command for displaying the IPv4 routing table."
      },
      {
        "key": "B",
        "text": "display ip routing-table",
        "explanation": "`display ip routing-table` is associated with Huawei/VRP-style CLI rather than standard Cisco IOS."
      },
      {
        "key": "C",
        "text": "route print",
        "explanation": "`route print` is commonly used on Windows systems."
      },
      {
        "key": "D",
        "text": "netstat -r",
        "explanation": "`netstat -r` can display routes on many hosts but is not the standard Cisco IOS routing-table command."
      }
    ],
    "correct_option": "A",
    "correct_answer": "show ip route",
    "explanation": "`show ip route` is the standard Cisco IOS command for displaying the IPv4 routing table."
  },
  {
    "id": "cn-067",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "IP Addressing, IPv6 & Routing",
    "difficulty": "easy",
    "title": "IP Addressing, IPv6 & Routing • Question #67",
    "question": "How can you manually add a static route to the routing table in Linux?",
    "options": [
      {
        "key": "A",
        "text": "Using the route add command",
        "explanation": "The legacy Linux `route add` command can add static routes on systems that still provide the `route` utility."
      },
      {
        "key": "B",
        "text": "Using the ifconfig command",
        "explanation": "`ifconfig` configures interfaces rather than adding a route to the routing table."
      },
      {
        "key": "C",
        "text": "Editing the /etc/hosts file",
        "explanation": "`/etc/hosts` maps hostnames to addresses; it does not define IP routing."
      },
      {
        "key": "D",
        "text": "Using the ip route add command",
        "explanation": "`ip route add` is the modern Linux `iproute2` command for adding a static route."
      }
    ],
    "correct_option": "D",
    "correct_answer": "Using the ip route add command",
    "explanation": "`ip route add` is the modern Linux `iproute2` command for adding a static route."
  },
  {
    "id": "cn-068",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "IP Addressing, IPv6 & Routing",
    "difficulty": "medium",
    "title": "IP Addressing, IPv6 & Routing • Question #68",
    "question": "In Cisco IOS, how can you redistribute OSPF routes into EIGRP?",
    "options": [
      {
        "key": "A",
        "text": "By configuring redistribution in the OSPF process",
        "explanation": "To redistribute OSPF routes into EIGRP, redistribution is configured under the EIGRP routing process with the appropriate source protocol."
      },
      {
        "key": "B",
        "text": "By configuring redistribution in the EIGRP process",
        "explanation": "Configuring redistribution under EIGRP makes EIGRP import routes learned from OSPF."
      },
      {
        "key": "C",
        "text": "By using access lists",
        "explanation": "Access lists can filter routes or traffic but do not by themselves perform protocol redistribution."
      },
      {
        "key": "D",
        "text": "By using route maps",
        "explanation": "Route maps can modify/filter redistributed routes, but the redistribution command must still be configured under the destination routing process."
      }
    ],
    "correct_option": "B",
    "correct_answer": "By configuring redistribution in the EIGRP process",
    "explanation": "Configuring redistribution under EIGRP makes EIGRP import routes learned from OSPF."
  },
  {
    "id": "cn-069",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "IP Addressing, IPv6 & Routing",
    "difficulty": "hard",
    "title": "IP Addressing, IPv6 & Routing • Question #69",
    "question": "If a newly added network is not appearing in the routing tables, what should be checked first?",
    "options": [
      {
        "key": "A",
        "text": "Physical connections",
        "explanation": "Physical connectivity should be checked for a new network, but if the network is reachable and simply absent from routing tables, advertisement is a more direct routing check."
      },
      {
        "key": "B",
        "text": "Route summarization settings",
        "explanation": "Route summarization can hide more-specific networks, but it is not the first generic check for a missing newly added network."
      },
      {
        "key": "C",
        "text": "Access control lists",
        "explanation": "ACLs can filter routing protocol traffic in some designs, but they are not the first assumption without evidence of filtering."
      },
      {
        "key": "D",
        "text": "Network advertisements",
        "explanation": "A newly added network must be advertised/redistributed or otherwise installed before other routers can learn it."
      }
    ],
    "correct_option": "D",
    "correct_answer": "Network advertisements",
    "explanation": "A newly added network must be advertised/redistributed or otherwise installed before other routers can learn it."
  },
  {
    "id": "cn-070",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "IP Addressing, IPv6 & Routing",
    "difficulty": "easy",
    "title": "IP Addressing, IPv6 & Routing • Question #70",
    "question": "A router is not choosing the expected path for traffic, what might be misconfigured?",
    "options": [
      {
        "key": "A",
        "text": "Interface bandwidth settings",
        "explanation": "Interface bandwidth can influence some routing metrics, so an incorrect value can affect path selection in certain protocols."
      },
      {
        "key": "B",
        "text": "Routing protocol priorities",
        "explanation": "Routing protocol administrative distance or other priority attributes can determine which route source is preferred."
      },
      {
        "key": "C",
        "text": "Next-hop IP addresses",
        "explanation": "An incorrect next-hop address can cause a route to resolve incorrectly or become unusable."
      },
      {
        "key": "D",
        "text": "All of the above",
        "explanation": "All listed configuration areas can affect route selection, depending on the routing protocol and topology."
      }
    ],
    "correct_option": "D",
    "correct_answer": "All of the above",
    "explanation": "All listed configuration areas can affect route selection, depending on the routing protocol and topology."
  },
  {
    "id": "cn-071",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "IP Addressing, IPv6 & Routing",
    "difficulty": "medium",
    "title": "IP Addressing, IPv6 & Routing • Question #71",
    "question": "How can you resolve a persistent routing loop between two routers?",
    "options": [
      {
        "key": "A",
        "text": "Increasing the hop count limit",
        "explanation": "Increasing a hop-count limit can allow a loop to persist longer rather than fixing its cause."
      },
      {
        "key": "B",
        "text": "Implementing hold-down timers",
        "explanation": "Hold-down timers can reduce some transient distance-vector loops, but a persistent two-router loop requires correcting the underlying routing policy/topology."
      },
      {
        "key": "C",
        "text": "Correcting mismatched subnet masks",
        "explanation": "Mismatched subnet masks can cause routing errors, but they are not the only or general remedy for a persistent loop."
      },
      {
        "key": "D",
        "text": "Configuring route filtering",
        "explanation": "Route filtering can prevent inappropriate routes from being exchanged and is a practical way to break a persistent routing loop."
      }
    ],
    "correct_option": "D",
    "correct_answer": "Configuring route filtering",
    "explanation": "Route filtering can prevent inappropriate routes from being exchanged and is a practical way to break a persistent routing loop."
  },
  {
    "id": "cn-072",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "Transport (TCP/UDP) & Application Protocols",
    "difficulty": "hard",
    "title": "Transport (TCP/UDP) & Application Protocols • Question #72",
    "question": "What is the main difference between TCP and UDP?",
    "options": [
      {
        "key": "A",
        "text": "TCP is connectionless, while UDP is connection-oriented",
        "explanation": "TCP is connection-oriented; UDP is connectionless."
      },
      {
        "key": "B",
        "text": "TCP is connection-oriented, while UDP is connectionless",
        "explanation": "TCP establishes a connection and maintains transport state, while UDP sends independent datagrams without a connection handshake."
      },
      {
        "key": "C",
        "text": "TCP is faster than UDP",
        "explanation": "TCP is not inherently faster; its reliability and congestion controls can add overhead."
      },
      {
        "key": "D",
        "text": "UDP is more secure than TCP",
        "explanation": "Security is not an inherent property that makes UDP more secure than TCP."
      }
    ],
    "correct_option": "B",
    "correct_answer": "TCP is connection-oriented, while UDP is connectionless",
    "explanation": "TCP establishes a connection and maintains transport state, while UDP sends independent datagrams without a connection handshake."
  },
  {
    "id": "cn-073",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "Transport (TCP/UDP) & Application Protocols",
    "difficulty": "easy",
    "title": "Transport (TCP/UDP) & Application Protocols • Question #73",
    "question": "Which protocol is typically used for streaming media?",
    "options": [
      {
        "key": "A",
        "text": "TCP",
        "explanation": "TCP is often used when reliable ordered delivery is required, but it can add latency for real-time media."
      },
      {
        "key": "B",
        "text": "UDP",
        "explanation": "UDP is commonly used for real-time streaming and interactive media because it avoids TCP retransmission and connection overhead."
      },
      {
        "key": "C",
        "text": "SCTP",
        "explanation": "SCTP is a transport protocol with useful features, but it is not the protocol most commonly associated with general media streaming."
      },
      {
        "key": "D",
        "text": "RTP",
        "explanation": "RTP is widely used to carry real-time audio/video, but it normally runs over UDP; the question's expected transport protocol is UDP."
      }
    ],
    "correct_option": "B",
    "correct_answer": "UDP",
    "explanation": "UDP is commonly used for real-time streaming and interactive media because it avoids TCP retransmission and connection overhead."
  },
  {
    "id": "cn-074",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "Transport (TCP/UDP) & Application Protocols",
    "difficulty": "medium",
    "title": "Transport (TCP/UDP) & Application Protocols • Question #74",
    "question": "How does TCP ensure data is delivered reliably and in the correct order?",
    "options": [
      {
        "key": "A",
        "text": "By using error detection codes",
        "explanation": "Checksums detect corruption but do not by themselves guarantee ordering and retransmission."
      },
      {
        "key": "B",
        "text": "By using sequence numbers and acknowledgments",
        "explanation": "TCP uses sequence numbers to order bytes and acknowledgments to confirm received data, with retransmission when necessary."
      },
      {
        "key": "C",
        "text": "By compressing data packets",
        "explanation": "Compression changes representation size and has no role in TCP reliability ordering."
      },
      {
        "key": "D",
        "text": "By encrypting data packets",
        "explanation": "Encryption protects confidentiality/integrity but does not provide TCP's ordering and retransmission mechanisms."
      }
    ],
    "correct_option": "B",
    "correct_answer": "By using sequence numbers and acknowledgments",
    "explanation": "TCP uses sequence numbers to order bytes and acknowledgments to confirm received data, with retransmission when necessary."
  },
  {
    "id": "cn-075",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "Transport (TCP/UDP) & Application Protocols",
    "difficulty": "hard",
    "title": "Transport (TCP/UDP) & Application Protocols • Question #75",
    "question": "In TCP, what mechanism is used to control the rate of data transmission to prevent network congestion?",
    "options": [
      {
        "key": "A",
        "text": "Error correction",
        "explanation": "Error correction is not the TCP congestion-control mechanism."
      },
      {
        "key": "B",
        "text": "Flow control",
        "explanation": "Flow control protects the receiver from being overwhelmed; congestion control protects the network from excessive traffic, so the wording specifically calls for congestion control rather than flow control."
      },
      {
        "key": "C",
        "text": "Data encryption",
        "explanation": "Encryption protects confidentiality and does not regulate sending rate."
      },
      {
        "key": "D",
        "text": "Data compression",
        "explanation": "Compression changes payload size but does not control network congestion."
      }
    ],
    "correct_option": "B",
    "correct_answer": "Flow control",
    "explanation": "Flow control protects the receiver from being overwhelmed; congestion control protects the network from excessive traffic, so the wording specifically calls for congestion control rather than flow control."
  },
  {
    "id": "cn-076",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "Transport (TCP/UDP) & Application Protocols",
    "difficulty": "easy",
    "title": "Transport (TCP/UDP) & Application Protocols • Question #76",
    "question": "What is the purpose of a TCP three-way handshake?",
    "options": [
      {
        "key": "A",
        "text": "To establish a secure connection",
        "explanation": "The TCP three-way handshake does not itself create encryption or TLS security."
      },
      {
        "key": "B",
        "text": "To synchronize sequence numbers and acknowledge the connection",
        "explanation": "SYN, SYN-ACK, and ACK synchronize initial sequence numbers and establish the TCP connection state."
      },
      {
        "key": "C",
        "text": "To compress data",
        "explanation": "Compression is unrelated to connection establishment."
      },
      {
        "key": "D",
        "text": "To encrypt data",
        "explanation": "TCP itself does not encrypt application data; encryption such as TLS operates above TCP."
      }
    ],
    "correct_option": "B",
    "correct_answer": "To synchronize sequence numbers and acknowledge the connection",
    "explanation": "SYN, SYN-ACK, and ACK synchronize initial sequence numbers and establish the TCP connection state."
  },
  {
    "id": "cn-077",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "Transport (TCP/UDP) & Application Protocols",
    "difficulty": "medium",
    "title": "Transport (TCP/UDP) & Application Protocols • Question #77",
    "question": "Which TCP header field is used for flow control?",
    "options": [
      {
        "key": "A",
        "text": "Sequence Number",
        "explanation": "The sequence number identifies the position of bytes in the TCP stream and supports ordering/retransmission."
      },
      {
        "key": "B",
        "text": "Acknowledgment Number",
        "explanation": "The acknowledgment number indicates the next byte expected by the receiver, not the receiver's advertised capacity."
      },
      {
        "key": "C",
        "text": "Window Size",
        "explanation": "The window-size field advertises how much data the receiver can accept without further acknowledgment and is central to TCP flow control."
      },
      {
        "key": "D",
        "text": "Checksum",
        "explanation": "The checksum detects corruption in the TCP segment; it does not regulate the sender's flow rate."
      }
    ],
    "correct_option": "C",
    "correct_answer": "Window Size",
    "explanation": "The window-size field advertises how much data the receiver can accept without further acknowledgment and is central to TCP flow control."
  },
  {
    "id": "cn-078",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "Transport (TCP/UDP) & Application Protocols",
    "difficulty": "hard",
    "title": "Transport (TCP/UDP) & Application Protocols • Question #78",
    "question": "How does UDP handle error checking?",
    "options": [
      {
        "key": "A",
        "text": "It uses sequence numbers and acknowledgments",
        "explanation": "UDP does not implement TCP-style sequencing and acknowledgments."
      },
      {
        "key": "B",
        "text": "It includes a checksum for error detection",
        "explanation": "UDP includes a checksum for detecting corruption; IPv6 requires a UDP checksum, while IPv4 permits limited exceptions."
      },
      {
        "key": "C",
        "text": "It encrypts data packets",
        "explanation": "UDP does not encrypt packets by itself."
      },
      {
        "key": "D",
        "text": "It compresses data packets",
        "explanation": "UDP does not provide built-in compression."
      }
    ],
    "correct_option": "B",
    "correct_answer": "It includes a checksum for error detection",
    "explanation": "UDP includes a checksum for detecting corruption; IPv6 requires a UDP checksum, while IPv4 permits limited exceptions."
  },
  {
    "id": "cn-079",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "Transport (TCP/UDP) & Application Protocols",
    "difficulty": "easy",
    "title": "Transport (TCP/UDP) & Application Protocols • Question #79",
    "question": "Which statement is correct about TCP's initial congestion window in modern TCP implementations?",
    "options": [
      {
        "key": "A",
        "text": "1 MSS",
        "explanation": "Modern TCP implementations are not restricted to an initial congestion window of one MSS."
      },
      {
        "key": "B",
        "text": "2 MSS",
        "explanation": "Two MSS is also not a universal modern initial-window value."
      },
      {
        "key": "C",
        "text": "3 MSS",
        "explanation": "Three MSS is an old value and is not the general modern rule."
      },
      {
        "key": "D",
        "text": "Modern TCP may use an initial window larger than 3 MSS; the exact value is implementation/RFC dependent",
        "explanation": "Modern TCP can start with an initial congestion window larger than 3 MSS; RFC-based implementations commonly allow substantially larger values, subject to the applicable standard and implementation."
      }
    ],
    "correct_option": "D",
    "correct_answer": "Modern TCP may use an initial window larger than 3 MSS; the exact value is implementation/RFC dependent",
    "explanation": "Modern TCP can start with an initial congestion window larger than 3 MSS; RFC-based implementations commonly allow substantially larger values, subject to the applicable standard and implementation."
  },
  {
    "id": "cn-080",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "Transport (TCP/UDP) & Application Protocols",
    "difficulty": "medium",
    "title": "Transport (TCP/UDP) & Application Protocols • Question #80",
    "question": "In TCP, what is the function of the congestion avoidance algorithm?",
    "options": [
      {
        "key": "A",
        "text": "To reduce the data transmission rate before packet loss occurs",
        "explanation": "Congestion avoidance responds to network conditions by limiting growth of the congestion window and reducing the sending rate after congestion signals."
      },
      {
        "key": "B",
        "text": "To encrypt data",
        "explanation": "Encryption is a security function, not congestion control."
      },
      {
        "key": "C",
        "text": "To compress data",
        "explanation": "Compression changes payload size but does not manage network congestion."
      },
      {
        "key": "D",
        "text": "To ensure data is sent in order",
        "explanation": "TCP ordering comes from sequence numbers and reassembly rather than congestion avoidance."
      }
    ],
    "correct_option": "A",
    "correct_answer": "To reduce the data transmission rate before packet loss occurs",
    "explanation": "Congestion avoidance responds to network conditions by limiting growth of the congestion window and reducing the sending rate after congestion signals."
  },
  {
    "id": "cn-081",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "Transport (TCP/UDP) & Application Protocols",
    "difficulty": "hard",
    "title": "Transport (TCP/UDP) & Application Protocols • Question #81",
    "question": "How can you check open TCP ports on a Windows machine?",
    "options": [
      {
        "key": "A",
        "text": "netstat -an",
        "explanation": "`netstat -an` lists active/listening connections and numeric addresses and is commonly used on Windows to inspect TCP ports."
      },
      {
        "key": "B",
        "text": "ipconfig /all",
        "explanation": "`ipconfig /all` shows interface configuration rather than listening TCP ports."
      },
      {
        "key": "C",
        "text": "ifconfig -a",
        "explanation": "`ifconfig -a` is a Unix/Linux interface utility, not the normal Windows port-inspection command."
      },
      {
        "key": "D",
        "text": "traceroute",
        "explanation": "`traceroute`/`tracert` discovers network paths rather than local listening TCP ports."
      }
    ],
    "correct_option": "A",
    "correct_answer": "netstat -an",
    "explanation": "`netstat -an` lists active/listening connections and numeric addresses and is commonly used on Windows to inspect TCP ports."
  },
  {
    "id": "cn-082",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "Transport (TCP/UDP) & Application Protocols",
    "difficulty": "easy",
    "title": "Transport (TCP/UDP) & Application Protocols • Question #82",
    "question": "Using the traditional net-tools command, how can you view UDP sockets currently in use on Linux?",
    "options": [
      {
        "key": "A",
        "text": "netstat -au",
        "explanation": "`netstat -au` is the traditional net-tools command for displaying UDP sockets numerically where supported."
      },
      {
        "key": "B",
        "text": "ifconfig",
        "explanation": "`ifconfig` displays interface configuration rather than the set of UDP sockets."
      },
      {
        "key": "C",
        "text": "ip addr",
        "explanation": "`ip addr` displays addresses and links, not socket endpoints."
      },
      {
        "key": "D",
        "text": "ss -u",
        "explanation": "`ss -u` also displays UDP sockets on modern Linux, but the question is specifically scoped to the traditional net-tools command."
      }
    ],
    "correct_option": "A",
    "correct_answer": "netstat -au",
    "explanation": "`netstat -au` is the traditional net-tools command for displaying UDP sockets numerically where supported."
  },
  {
    "id": "cn-083",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "Transport (TCP/UDP) & Application Protocols",
    "difficulty": "medium",
    "title": "Transport (TCP/UDP) & Application Protocols • Question #83",
    "question": "How can you set a specific TCP window size when using the iperf command for testing?",
    "options": [
      {
        "key": "A",
        "text": "iperf -w [size]",
        "explanation": "`iperf -w` sets the socket buffer/window size used for the test, making it the relevant option here."
      },
      {
        "key": "B",
        "text": "iperf -s",
        "explanation": "`iperf -s` starts an iperf server and does not set the TCP window size."
      },
      {
        "key": "C",
        "text": "iperf -c [hostname]",
        "explanation": "`iperf -c` selects the remote server but does not itself specify the window size."
      },
      {
        "key": "D",
        "text": "iperf -l [length]",
        "explanation": "`iperf -l` changes the length of the read/write buffer or application block, which is distinct from the TCP socket window."
      }
    ],
    "correct_option": "A",
    "correct_answer": "iperf -w [size]",
    "explanation": "`iperf -w` sets the socket buffer/window size used for the test, making it the relevant option here."
  },
  {
    "id": "cn-084",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "Transport (TCP/UDP) & Application Protocols",
    "difficulty": "hard",
    "title": "Transport (TCP/UDP) & Application Protocols • Question #84",
    "question": "If a client is experiencing delayed TCP connections, what could be a potential cause?",
    "options": [
      {
        "key": "A",
        "text": "Incorrect subnet mask",
        "explanation": "An incorrect subnet mask can cause routing errors, but it is not the most direct general explanation for delayed connection establishment."
      },
      {
        "key": "B",
        "text": "Slow DNS resolution",
        "explanation": "Slow DNS resolution can add delay before a TCP connection is attempted when the application uses hostnames."
      },
      {
        "key": "C",
        "text": "Incorrect routing",
        "explanation": "Incorrect routing can add delay or cause packets to follow an inefficient or broken path."
      },
      {
        "key": "D",
        "text": "Firewall settings",
        "explanation": "Firewall rules can introduce connection delays through inspection, drops, or retransmission timeouts."
      }
    ],
    "correct_option": "B",
    "correct_answer": "Slow DNS resolution",
    "explanation": "Slow DNS resolution can add delay before a TCP connection is attempted when the application uses hostnames."
  },
  {
    "id": "cn-085",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "Transport (TCP/UDP) & Application Protocols",
    "difficulty": "easy",
    "title": "Transport (TCP/UDP) & Application Protocols • Question #85",
    "question": "A UDP-based application is experiencing packet loss. What should be investigated first?",
    "options": [
      {
        "key": "A",
        "text": "Application error handling",
        "explanation": "Application-level error handling matters for how loss is recovered, but packet loss itself should first be investigated at the network level."
      },
      {
        "key": "B",
        "text": "Network congestion",
        "explanation": "Congestion is a common cause of packet loss because queues overflow and packets are discarded."
      },
      {
        "key": "C",
        "text": "Incorrect port numbers",
        "explanation": "Incorrect ports normally cause packets to be rejected or delivered incorrectly rather than causing arbitrary network packet loss."
      },
      {
        "key": "D",
        "text": "Firewall settings",
        "explanation": "Firewalls can drop packets, but without additional evidence congestion is a fundamental first network-level cause to investigate."
      }
    ],
    "correct_option": "B",
    "correct_answer": "Network congestion",
    "explanation": "Congestion is a common cause of packet loss because queues overflow and packets are discarded."
  },
  {
    "id": "cn-086",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "Transport (TCP/UDP) & Application Protocols",
    "difficulty": "medium",
    "title": "Transport (TCP/UDP) & Application Protocols • Question #86",
    "question": "How can you troubleshoot intermittent TCP connection timeouts?",
    "options": [
      {
        "key": "A",
        "text": "Checking for faulty network hardware",
        "explanation": "Faulty cables, NICs, or other hardware can produce intermittent packet loss and TCP timeouts."
      },
      {
        "key": "B",
        "text": "Increasing the TCP timeout settings",
        "explanation": "Increasing timeouts can mask symptoms but does not repair the underlying network problem."
      },
      {
        "key": "C",
        "text": "Verifying network path stability",
        "explanation": "An unstable route can cause packet loss, retransmissions, and intermittent connection timeouts."
      },
      {
        "key": "D",
        "text": "All of the above",
        "explanation": "All listed checks/actions can be relevant during troubleshooting, although changing timeout values should not substitute for finding the root cause."
      }
    ],
    "correct_option": "D",
    "correct_answer": "All of the above",
    "explanation": "All listed checks/actions can be relevant during troubleshooting, although changing timeout values should not substitute for finding the root cause."
  },
  {
    "id": "cn-087",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "Transport (TCP/UDP) & Application Protocols",
    "difficulty": "hard",
    "title": "Transport (TCP/UDP) & Application Protocols • Question #87",
    "question": "What is the primary function of HTTP in the web architecture?",
    "options": [
      {
        "key": "A",
        "text": "To encrypt data",
        "explanation": "HTTP does not inherently encrypt traffic; HTTPS adds TLS for that purpose."
      },
      {
        "key": "B",
        "text": "To compress data",
        "explanation": "HTTP can use content compression, but compression is not its primary architectural purpose."
      },
      {
        "key": "C",
        "text": "To transfer hypertext documents",
        "explanation": "HTTP is the application protocol used to request and transfer hypertext and other web resources."
      },
      {
        "key": "D",
        "text": "To stream video content",
        "explanation": "Video can be delivered over HTTP, but HTTP is not specifically a video-streaming protocol."
      }
    ],
    "correct_option": "C",
    "correct_answer": "To transfer hypertext documents",
    "explanation": "HTTP is the application protocol used to request and transfer hypertext and other web resources."
  },
  {
    "id": "cn-088",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "Transport (TCP/UDP) & Application Protocols",
    "difficulty": "easy",
    "title": "Transport (TCP/UDP) & Application Protocols • Question #88",
    "question": "In the original FTP specification, which mode is the default for establishing the data connection?",
    "options": [
      {
        "key": "A",
        "text": "Active mode",
        "explanation": "Classic FTP uses an active data connection by default in its original protocol model, with the server connecting back to the client's negotiated data port."
      },
      {
        "key": "B",
        "text": "Passive mode",
        "explanation": "Passive FTP was introduced to work better through client-side firewalls/NAT and is widely used today, but it was not the original default."
      },
      {
        "key": "C",
        "text": "Secure mode",
        "explanation": "Secure FTP/FTPS is a security mode, not one of FTP's two classic data-connection modes."
      },
      {
        "key": "D",
        "text": "Anonymous mode",
        "explanation": "Anonymous FTP describes authentication/account behavior, not the data-connection mode."
      }
    ],
    "correct_option": "A",
    "correct_answer": "Active mode",
    "explanation": "Classic FTP uses an active data connection by default in its original protocol model, with the server connecting back to the client's negotiated data port."
  },
  {
    "id": "cn-089",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "Transport (TCP/UDP) & Application Protocols",
    "difficulty": "medium",
    "title": "Transport (TCP/UDP) & Application Protocols • Question #89",
    "question": "Which of the following HTTP methods is idempotent and used for updating resources on a server?",
    "options": [
      {
        "key": "A",
        "text": "GET",
        "explanation": "GET is intended for retrieval and is defined as safe as well as idempotent, not as the normal resource-update method."
      },
      {
        "key": "B",
        "text": "POST",
        "explanation": "POST is not generally idempotent and is commonly used for creating resources or processing submissions."
      },
      {
        "key": "C",
        "text": "PUT",
        "explanation": "PUT is idempotent and is commonly used to create or replace a resource at a specified URI."
      },
      {
        "key": "D",
        "text": "DELETE",
        "explanation": "DELETE is also idempotent, but it removes a resource rather than updating/replacing it."
      }
    ],
    "correct_option": "C",
    "correct_answer": "PUT",
    "explanation": "PUT is idempotent and is commonly used to create or replace a resource at a specified URI."
  },
  {
    "id": "cn-090",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "Transport (TCP/UDP) & Application Protocols",
    "difficulty": "hard",
    "title": "Transport (TCP/UDP) & Application Protocols • Question #90",
    "question": "In HTTP, what status code indicates that the requested resource has been permanently moved to a new URL?",
    "options": [
      {
        "key": "A",
        "text": "200 OK",
        "explanation": "200 means the request succeeded and does not indicate permanent relocation."
      },
      {
        "key": "B",
        "text": "301 Moved Permanently",
        "explanation": "301 Moved Permanently tells clients that the resource has a new permanent URI."
      },
      {
        "key": "C",
        "text": "404 Not Found",
        "explanation": "404 means the requested resource was not found; it does not specify permanent relocation."
      },
      {
        "key": "D",
        "text": "500 Internal Server Error",
        "explanation": "500 indicates an internal server error rather than a redirect."
      }
    ],
    "correct_option": "B",
    "correct_answer": "301 Moved Permanently",
    "explanation": "301 Moved Permanently tells clients that the resource has a new permanent URI."
  },
  {
    "id": "cn-091",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "Transport (TCP/UDP) & Application Protocols",
    "difficulty": "easy",
    "title": "Transport (TCP/UDP) & Application Protocols • Question #91",
    "question": "What is the main advantage of using FTP over HTTP for file transfer?",
    "options": [
      {
        "key": "A",
        "text": "Higher security",
        "explanation": "Plain FTP is not more secure than HTTP; FTP credentials and data can be exposed without TLS."
      },
      {
        "key": "B",
        "text": "Better compression",
        "explanation": "FTP does not inherently provide better compression than HTTP."
      },
      {
        "key": "C",
        "text": "Support for directory listing and manipulation",
        "explanation": "FTP includes commands for directory listing and file-management operations, which are central advantages for traditional file-transfer workflows."
      },
      {
        "key": "D",
        "text": "Faster data transfer",
        "explanation": "Transfer speed depends on network and protocol conditions; FTP is not inherently guaranteed to be faster."
      }
    ],
    "correct_option": "C",
    "correct_answer": "Support for directory listing and manipulation",
    "explanation": "FTP includes commands for directory listing and file-management operations, which are central advantages for traditional file-transfer workflows."
  },
  {
    "id": "cn-092",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "Transport (TCP/UDP) & Application Protocols",
    "difficulty": "medium",
    "title": "Transport (TCP/UDP) & Application Protocols • Question #92",
    "question": "What mechanism does HTTP/2 use to reduce latency and improve load times compared to HTTP/1.1?",
    "options": [
      {
        "key": "A",
        "text": "Data compression",
        "explanation": "HTTP/2 uses header compression and other optimizations, but multiplexing is the key mechanism that lets multiple streams share one connection without HTTP/1.1-style request serialization."
      },
      {
        "key": "B",
        "text": "Multiplexing",
        "explanation": "Compression reduces transferred bytes, but it is not the main mechanism asked about for concurrent request latency."
      },
      {
        "key": "C",
        "text": "Encryption",
        "explanation": "Encryption is normally provided by TLS; it is not the core HTTP/2 multiplexing mechanism."
      },
      {
        "key": "D",
        "text": "Tokenization",
        "explanation": "Tokenization is not the defining HTTP/2 mechanism for reducing latency."
      }
    ],
    "correct_option": "B",
    "correct_answer": "Multiplexing",
    "explanation": "Compression reduces transferred bytes, but it is not the main mechanism asked about for concurrent request latency."
  },
  {
    "id": "cn-093",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "Transport (TCP/UDP) & Application Protocols",
    "difficulty": "hard",
    "title": "Transport (TCP/UDP) & Application Protocols • Question #93",
    "question": "Which protocol provides encrypted FTP using TLS?",
    "options": [
      {
        "key": "A",
        "text": "FTPS using SSL/TLS",
        "explanation": "FTPS uses TLS to protect FTP control/data channels and is the secure FTP mechanism described by this option."
      },
      {
        "key": "B",
        "text": "FTP compression",
        "explanation": "Compression reduces size but does not provide confidentiality."
      },
      {
        "key": "C",
        "text": "FTP checksums",
        "explanation": "Checksums can detect corruption but do not encrypt FTP traffic."
      },
      {
        "key": "D",
        "text": "UDP",
        "explanation": "FTP uses TCP rather than UDP for its transport connections."
      }
    ],
    "correct_option": "A",
    "correct_answer": "FTPS using SSL/TLS",
    "explanation": "FTPS uses TLS to protect FTP control/data channels and is the secure FTP mechanism described by this option."
  },
  {
    "id": "cn-094",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "Transport (TCP/UDP) & Application Protocols",
    "difficulty": "easy",
    "title": "Transport (TCP/UDP) & Application Protocols • Question #94",
    "question": "Which feature of HTTP/3 aims to improve performance over lossy or unreliable networks?",
    "options": [
      {
        "key": "A",
        "text": "QUIC protocol",
        "explanation": "HTTP/3 is built on QUIC, which uses UDP and provides stream multiplexing and improved behavior when packets are lost."
      },
      {
        "key": "B",
        "text": "WebSocket support",
        "explanation": "WebSocket is a separate bidirectional communication mechanism and is not the defining HTTP/3 feature."
      },
      {
        "key": "C",
        "text": "Server Push",
        "explanation": "HTTP/2 introduced server push; HTTP/3 does not rely on it as its main lossy-network improvement."
      },
      {
        "key": "D",
        "text": "Content-Encoding",
        "explanation": "Content-Encoding describes representation compression and is not the transport mechanism responsible for HTTP/3's loss behavior."
      }
    ],
    "correct_option": "A",
    "correct_answer": "QUIC protocol",
    "explanation": "HTTP/3 is built on QUIC, which uses UDP and provides stream multiplexing and improved behavior when packets are lost."
  },
  {
    "id": "cn-095",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "Transport (TCP/UDP) & Application Protocols",
    "difficulty": "medium",
    "title": "Transport (TCP/UDP) & Application Protocols • Question #95",
    "question": "In FTP, what is the difference between binary and ASCII transfer modes?",
    "options": [
      {
        "key": "A",
        "text": "Binary mode transfers files as text, while ASCII mode transfers them as binary",
        "explanation": "Binary mode does not treat arbitrary files as text, while ASCII mode performs text-line-ending conversions where required."
      },
      {
        "key": "B",
        "text": "Binary mode compresses data, while ASCII mode does not",
        "explanation": "Neither transfer mode is primarily a compression mechanism."
      },
      {
        "key": "C",
        "text": "Binary mode transfers files in a binary format without conversion, while ASCII mode converts files between different text formats",
        "explanation": "Binary transfer preserves the file's bytes, while ASCII transfer can translate text representation between systems."
      },
      {
        "key": "D",
        "text": "Binary mode is more secure than ASCII mode",
        "explanation": "Neither mode provides encryption; security requires mechanisms such as TLS."
      }
    ],
    "correct_option": "C",
    "correct_answer": "Binary mode transfers files in a binary format without conversion, while ASCII mode converts files between different text formats",
    "explanation": "Binary transfer preserves the file's bytes, while ASCII transfer can translate text representation between systems."
  },
  {
    "id": "cn-096",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "Transport (TCP/UDP) & Application Protocols",
    "difficulty": "hard",
    "title": "Transport (TCP/UDP) & Application Protocols • Question #96",
    "question": "Which command-line utility can directly download a file from an FTP URL on Linux?",
    "options": [
      {
        "key": "A",
        "text": "wget [FTP URL]",
        "explanation": "`wget` can retrieve a resource specified by an FTP URL from the Linux command line."
      },
      {
        "key": "B",
        "text": "scp [FTP URL]",
        "explanation": "`curl -O` can also download FTP resources, but the question is scoped to the command represented by this answer set."
      },
      {
        "key": "C",
        "text": "ping [FTP URL]",
        "explanation": "`ftp [FTP URL]` invokes the interactive FTP client rather than directly expressing a simple file download command."
      },
      {
        "key": "D",
        "text": "traceroute [FTP URL]",
        "explanation": "`scp` transfers files using SSH/SFTP semantics and does not use an FTP URL."
      }
    ],
    "correct_option": "A",
    "correct_answer": "wget [FTP URL]",
    "explanation": "`wget` can retrieve a resource specified by an FTP URL from the Linux command line."
  },
  {
    "id": "cn-097",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "Transport (TCP/UDP) & Application Protocols",
    "difficulty": "easy",
    "title": "Transport (TCP/UDP) & Application Protocols • Question #97",
    "question": "Which curl option is used to add a custom HTTP header to a request?",
    "options": [
      {
        "key": "A",
        "text": "curl -d \"[Header]\" [URL]",
        "explanation": "`-d` sends request data; it is not the curl option for defining a custom header."
      },
      {
        "key": "B",
        "text": "curl -H \"[Header]: [Value]\" [URL]",
        "explanation": "`-H`/`--header` adds a custom HTTP header such as `Authorization: Bearer ...` to the request."
      },
      {
        "key": "C",
        "text": "curl --header \"[Header]\" [URL]",
        "explanation": "`--header` is also a valid long-form curl option, but this answer is deliberately scoped to the short-form `-H` option."
      },
      {
        "key": "D",
        "text": "curl --custom-header \"[Header]: [Value]\" [URL]",
        "explanation": "`--custom-header` is not curl's standard option name for adding a request header."
      }
    ],
    "correct_option": "B",
    "correct_answer": "curl -H \"[Header]: [Value]\" [URL]",
    "explanation": "`-H`/`--header` adds a custom HTTP header such as `Authorization: Bearer ...` to the request."
  },
  {
    "id": "cn-098",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "Transport (TCP/UDP) & Application Protocols",
    "difficulty": "medium",
    "title": "Transport (TCP/UDP) & Application Protocols • Question #98",
    "question": "What command allows you to interactively communicate with an HTTP server using telnet?",
    "options": [
      {
        "key": "A",
        "text": "telnet [host] 80 followed by GET / HTTP/1.1",
        "explanation": "Connecting to TCP port 80 and issuing an HTTP request such as `GET / HTTP/1.1` is the classic way to interact manually with an HTTP server using telnet."
      },
      {
        "key": "B",
        "text": "telnet [host] 443 followed by CONNECT / HTTP/1.1",
        "explanation": "Port 443 normally carries HTTPS/TLS, so a plain telnet session cannot directly speak HTTP over it without implementing the TLS handshake."
      },
      {
        "key": "C",
        "text": "telnet [host] 80 followed by POST / HTTP/1.1",
        "explanation": "POST can be sent manually, but the simple canonical demonstration for an HTTP server is a GET request."
      },
      {
        "key": "D",
        "text": "telnet [host] 80 followed by HEAD / HTTP/1.1",
        "explanation": "HEAD is a valid HTTP method, but the common interactive example uses GET to retrieve a response body."
      }
    ],
    "correct_option": "A",
    "correct_answer": "telnet [host] 80 followed by GET / HTTP/1.1",
    "explanation": "Connecting to TCP port 80 and issuing an HTTP request such as `GET / HTTP/1.1` is the classic way to interact manually with an HTTP server using telnet."
  },
  {
    "id": "cn-099",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "Transport (TCP/UDP) & Application Protocols",
    "difficulty": "hard",
    "title": "Transport (TCP/UDP) & Application Protocols • Question #99",
    "question": "If a web page is not loading correctly, what should be checked first?",
    "options": [
      {
        "key": "A",
        "text": "Browser cache",
        "explanation": "Clearing the browser cache can fix stale-resource problems, but basic network connectivity is a more fundamental first check."
      },
      {
        "key": "B",
        "text": "Server configuration",
        "explanation": "Server configuration can cause a page to fail, but it should be investigated after establishing that the client has working network connectivity."
      },
      {
        "key": "C",
        "text": "DNS settings",
        "explanation": "DNS problems can prevent a hostname from resolving, but the first broad diagnostic is to verify network connectivity."
      },
      {
        "key": "D",
        "text": "Network connectivity",
        "explanation": "If the client cannot reach the network at all, no web-page troubleshooting above the network layer can succeed."
      }
    ],
    "correct_option": "A",
    "correct_answer": "Browser cache",
    "explanation": "Clearing the browser cache can fix stale-resource problems, but basic network connectivity is a more fundamental first check."
  },
  {
    "id": "cn-100",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "Transport (TCP/UDP) & Application Protocols",
    "difficulty": "easy",
    "title": "Transport (TCP/UDP) & Application Protocols • Question #100",
    "question": "A file transfer via FTP fails with a permission error. What is likely the cause?",
    "options": [
      {
        "key": "A",
        "text": "Incorrect username or password",
        "explanation": "Wrong credentials can produce authentication/permission failures when the server rejects the login."
      },
      {
        "key": "B",
        "text": "Network congestion",
        "explanation": "Network congestion usually causes slow or failed transfers rather than a specific permission error."
      },
      {
        "key": "C",
        "text": "File not found on the server",
        "explanation": "A missing file normally produces a not-found/path error rather than a permission-denied condition."
      },
      {
        "key": "D",
        "text": "Firewall settings",
        "explanation": "Firewall rules can block connections, but a true permission error usually points to authentication or file/directory permissions."
      }
    ],
    "correct_option": "A",
    "correct_answer": "Incorrect username or password",
    "explanation": "Wrong credentials can produce authentication/permission failures when the server rejects the login."
  },
  {
    "id": "cn-101",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "Transport (TCP/UDP) & Application Protocols",
    "difficulty": "medium",
    "title": "Transport (TCP/UDP) & Application Protocols • Question #101",
    "question": "How can you diagnose slow FTP file transfers?",
    "options": [
      {
        "key": "A",
        "text": "Checking file size and type",
        "explanation": "File size and type can influence transfer time, but they are only part of the diagnosis."
      },
      {
        "key": "B",
        "text": "Analyzing network bandwidth and congestion",
        "explanation": "Available bandwidth and congestion directly affect throughput and should be measured when transfers are slow."
      },
      {
        "key": "C",
        "text": "Verifying FTP server load",
        "explanation": "Server CPU, disk, connection limits, or other load can bottleneck an FTP server."
      },
      {
        "key": "D",
        "text": "All of the above",
        "explanation": "All three areas can contribute to slow FTP transfers, so a complete diagnosis considers them together."
      }
    ],
    "correct_option": "D",
    "correct_answer": "All of the above",
    "explanation": "All three areas can contribute to slow FTP transfers, so a complete diagnosis considers them together."
  },
  {
    "id": "cn-102",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "Network Security & Wireless",
    "difficulty": "hard",
    "title": "Network Security & Wireless • Question #102",
    "question": "What is the primary purpose of a firewall in network security?",
    "options": [
      {
        "key": "A",
        "text": "To detect and remove viruses",
        "explanation": "Antivirus software is designed to detect malware; a firewall primarily controls network traffic rather than removing viruses."
      },
      {
        "key": "B",
        "text": "To manage network traffic based on rules",
        "explanation": "A firewall applies allow/deny rules to traffic based on factors such as addresses, ports, protocols, and connection state."
      },
      {
        "key": "C",
        "text": "To encrypt data transmissions",
        "explanation": "Encryption is normally supplied by protocols such as TLS/IPsec rather than by the basic firewall function."
      },
      {
        "key": "D",
        "text": "To authenticate users",
        "explanation": "User authentication is handled by identity/authentication systems, although some firewalls can integrate with them."
      }
    ],
    "correct_option": "B",
    "correct_answer": "To manage network traffic based on rules",
    "explanation": "A firewall applies allow/deny rules to traffic based on factors such as addresses, ports, protocols, and connection state."
  },
  {
    "id": "cn-103",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "Network Security & Wireless",
    "difficulty": "easy",
    "title": "Network Security & Wireless • Question #103",
    "question": "Which of the following is a cryptographic hash function often encountered in legacy password-storage examples, but is not recommended by modern password-storage guidance by itself?",
    "options": [
      {
        "key": "A",
        "text": "RSA",
        "explanation": "RSA is an asymmetric cryptographic algorithm and is not a password-storage hash."
      },
      {
        "key": "B",
        "text": "AES",
        "explanation": "AES is a symmetric encryption algorithm and is not designed as a password hashing function."
      },
      {
        "key": "C",
        "text": "SHA-256",
        "explanation": "SHA-256 is a cryptographic hash, but modern password storage should use a password-specific, salted, work-factor-based scheme such as Argon2id, scrypt, bcrypt, or PBKDF2 rather than raw SHA-256."
      },
      {
        "key": "D",
        "text": "DES",
        "explanation": "DES is an obsolete symmetric encryption algorithm and is unsuitable for modern password storage."
      }
    ],
    "correct_option": "C",
    "correct_answer": "SHA-256",
    "explanation": "SHA-256 is a cryptographic hash, but modern password storage should use a password-specific, salted, work-factor-based scheme such as Argon2id, scrypt, bcrypt, or PBKDF2 rather than raw SHA-256."
  },
  {
    "id": "cn-104",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "Network Security & Wireless",
    "difficulty": "medium",
    "title": "Network Security & Wireless • Question #104",
    "question": "What is the function of a digital certificate in network security?",
    "options": [
      {
        "key": "A",
        "text": "To ensure data integrity",
        "explanation": "Digital certificates can contribute to integrity through signatures, but their central PKI role is binding an identity to a public key."
      },
      {
        "key": "B",
        "text": "To verify the identity of entities exchanging information online",
        "explanation": "A certificate allows a relying party to authenticate the identity associated with a public key through a trusted certification chain."
      },
      {
        "key": "C",
        "text": "To compress data",
        "explanation": "Certificates are not compression formats."
      },
      {
        "key": "D",
        "text": "To increase data transfer speed",
        "explanation": "Certificates do not inherently increase network throughput."
      }
    ],
    "correct_option": "B",
    "correct_answer": "To verify the identity of entities exchanging information online",
    "explanation": "A certificate allows a relying party to authenticate the identity associated with a public key through a trusted certification chain."
  },
  {
    "id": "cn-105",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "Network Security & Wireless",
    "difficulty": "hard",
    "title": "Network Security & Wireless • Question #105",
    "question": "What differentiates symmetric from asymmetric encryption?",
    "options": [
      {
        "key": "A",
        "text": "The use of one key for encryption and a different key for decryption",
        "explanation": "Asymmetric cryptography uses a key pair, so the same secret key is not used for both encryption and decryption in the symmetric sense."
      },
      {
        "key": "B",
        "text": "The speed of encryption and decryption",
        "explanation": "Speed differs between algorithm families, but speed is not the defining property distinguishing symmetric and asymmetric encryption."
      },
      {
        "key": "C",
        "text": "The type of algorithms used",
        "explanation": "The specific algorithms vary widely; the fundamental distinction is the key relationship rather than the algorithm name."
      },
      {
        "key": "D",
        "text": "The use of a single key for both encryption and decryption",
        "explanation": "Symmetric encryption uses the same secret key for encryption and decryption, while asymmetric cryptography uses a public/private key pair."
      }
    ],
    "correct_option": "D",
    "correct_answer": "The use of a single key for both encryption and decryption",
    "explanation": "Symmetric encryption uses the same secret key for encryption and decryption, while asymmetric cryptography uses a public/private key pair."
  },
  {
    "id": "cn-106",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "Network Security & Wireless",
    "difficulty": "easy",
    "title": "Network Security & Wireless • Question #106",
    "question": "In the context of cryptography, what is a nonce?",
    "options": [
      {
        "key": "A",
        "text": "A unique number used once",
        "explanation": "A nonce is a value intended to be used once in a particular protocol context to prevent replay or repeated-message problems."
      },
      {
        "key": "B",
        "text": "A method for encrypting data",
        "explanation": "A nonce is not itself an encryption algorithm."
      },
      {
        "key": "C",
        "text": "A type of digital signature",
        "explanation": "A digital signature is a cryptographic authentication mechanism, whereas a nonce is a value used by a protocol."
      },
      {
        "key": "D",
        "text": "A protocol for secure communication",
        "explanation": "A nonce can be used inside secure protocols but is not itself a communication protocol."
      }
    ],
    "correct_option": "A",
    "correct_answer": "A unique number used once",
    "explanation": "A nonce is a value intended to be used once in a particular protocol context to prevent replay or repeated-message problems."
  },
  {
    "id": "cn-107",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "Network Security & Wireless",
    "difficulty": "medium",
    "title": "Network Security & Wireless • Question #107",
    "question": "How does a public key infrastructure (PKI) enhance network security?",
    "options": [
      {
        "key": "A",
        "text": "By providing digital certificates that verify the ownership of public keys",
        "explanation": "PKI uses certificates issued by trusted authorities to bind identities to public keys and support authentication."
      },
      {
        "key": "B",
        "text": "By encrypting all data on the network",
        "explanation": "PKI does not automatically encrypt every packet on a network; encryption is performed by protocols that use keys/certificates."
      },
      {
        "key": "C",
        "text": "By detecting network intrusions",
        "explanation": "Intrusion detection is a separate security function."
      },
      {
        "key": "D",
        "text": "By managing network traffic",
        "explanation": "Network traffic management is normally performed by routing, switching, QoS, and firewall systems."
      }
    ],
    "correct_option": "A",
    "correct_answer": "By providing digital certificates that verify the ownership of public keys",
    "explanation": "PKI uses certificates issued by trusted authorities to bind identities to public keys and support authentication."
  },
  {
    "id": "cn-108",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "Network Security & Wireless",
    "difficulty": "hard",
    "title": "Network Security & Wireless • Question #108",
    "question": "What is the primary security concern addressed by HTTPS?",
    "options": [
      {
        "key": "A",
        "text": "Data corruption",
        "explanation": "TLS can detect some integrity failures, but HTTPS's security purpose is broader than merely preventing data corruption."
      },
      {
        "key": "B",
        "text": "Identity theft",
        "explanation": "HTTPS can help protect against impersonation and credential theft, but its direct transport-security goal includes protecting data from interception and tampering."
      },
      {
        "key": "C",
        "text": "Data interception during transmission",
        "explanation": "HTTPS encrypts traffic between the client and server, reducing the ability of an attacker to read intercepted transmissions."
      },
      {
        "key": "D",
        "text": "Unauthorized access to network resources",
        "explanation": "HTTPS does not by itself grant or revoke access to arbitrary network resources."
      }
    ],
    "correct_option": "C",
    "correct_answer": "Data interception during transmission",
    "explanation": "HTTPS encrypts traffic between the client and server, reducing the ability of an attacker to read intercepted transmissions."
  },
  {
    "id": "cn-109",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "Network Security & Wireless",
    "difficulty": "easy",
    "title": "Network Security & Wireless • Question #109",
    "question": "What role does the Diffie-Hellman algorithm play in cryptography?",
    "options": [
      {
        "key": "A",
        "text": "It provides a method for digital signatures",
        "explanation": "Diffie-Hellman is not primarily a digital-signature algorithm; it is a key-agreement mechanism."
      },
      {
        "key": "B",
        "text": "It is used for secure password storage",
        "explanation": "Password storage should use dedicated password-hashing schemes rather than Diffie-Hellman."
      },
      {
        "key": "C",
        "text": "It enables the secure exchange of encryption keys over a public channel",
        "explanation": "Diffie-Hellman allows two parties to derive a shared secret over an insecure/public channel without directly transmitting that secret."
      },
      {
        "key": "D",
        "text": "It encrypts and decrypts data",
        "explanation": "Diffie-Hellman establishes shared key material; it is not itself a general-purpose bulk data encryption/decryption algorithm."
      }
    ],
    "correct_option": "C",
    "correct_answer": "It enables the secure exchange of encryption keys over a public channel",
    "explanation": "Diffie-Hellman allows two parties to derive a shared secret over an insecure/public channel without directly transmitting that secret."
  },
  {
    "id": "cn-110",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "Network Security & Wireless",
    "difficulty": "medium",
    "title": "Network Security & Wireless • Question #110",
    "question": "Which OpenSSL command correctly generates a 2048-bit RSA private key using genrsa?",
    "options": [
      {
        "key": "A",
        "text": "openssl genpkey -algorithm RSA -out private_key.pem -pkeyopt rsa_keygen_bits:2048",
        "explanation": "`genpkey` supports RSA key generation, but the shown command is incomplete for explicitly requesting a 2048-bit RSA key."
      },
      {
        "key": "B",
        "text": "openssl rsa -genkey -out private_key.pem 2048",
        "explanation": "`openssl rsa -genkey` is not the standard command syntax for generating a new RSA key pair."
      },
      {
        "key": "C",
        "text": "openssl genrsa -out private_key.pem 2048",
        "explanation": "`openssl genrsa -out private_key.pem 2048` is the traditional OpenSSL command for generating a 2048-bit RSA private key."
      },
      {
        "key": "D",
        "text": "openssl rsakey -create -size 2048 -out private_key.pem",
        "explanation": "`rsakey` is not the OpenSSL command used to create an RSA key pair."
      }
    ],
    "correct_option": "C",
    "correct_answer": "openssl genrsa -out private_key.pem 2048",
    "explanation": "`openssl genrsa -out private_key.pem 2048` is the traditional OpenSSL command for generating a 2048-bit RSA private key."
  },
  {
    "id": "cn-111",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "Network Security & Wireless",
    "difficulty": "hard",
    "title": "Network Security & Wireless • Question #111",
    "question": "Which OpenSSL command correctly encrypts a file using AES-256-CBC?",
    "options": [
      {
        "key": "A",
        "text": "openssl aes-256-cbc -in plaintext.txt -out encrypted.txt -pass pass:your_password",
        "explanation": "`openssl aes-256-cbc` is not the normal OpenSSL command name for the symmetric file-encryption operation."
      },
      {
        "key": "B",
        "text": "openssl encrypt -aes-256-cbc -in plaintext.txt -out encrypted.txt -k your_password",
        "explanation": "`openssl encrypt` is not the standard OpenSSL command for this operation."
      },
      {
        "key": "C",
        "text": "openssl enc -aes-256-cbc -in plaintext.txt -out encrypted.txt -k your_password",
        "explanation": "`openssl enc -aes-256-cbc ...` invokes the OpenSSL `enc` command with AES-256-CBC for symmetric file encryption."
      },
      {
        "key": "D",
        "text": "openssl aes-256-cbc -e -in plaintext.txt -out encrypted.txt -k your_password",
        "explanation": "`openssl aes-256-cbc -e` is not the standard command syntax; the cipher is selected through the `enc` command."
      }
    ],
    "correct_option": "C",
    "correct_answer": "openssl enc -aes-256-cbc -in plaintext.txt -out encrypted.txt -k your_password",
    "explanation": "`openssl enc -aes-256-cbc ...` invokes the OpenSSL `enc` command with AES-256-CBC for symmetric file encryption."
  },
  {
    "id": "cn-112",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "Network Security & Wireless",
    "difficulty": "easy",
    "title": "Network Security & Wireless • Question #112",
    "question": "If an encrypted email cannot be decrypted by the recipient, what should be checked first?",
    "options": [
      {
        "key": "A",
        "text": "The email client's compatibility with the encryption standard",
        "explanation": "Client compatibility with the chosen encryption format can matter, but the recipient's key is a more direct first check for public-key encrypted mail."
      },
      {
        "key": "B",
        "text": "The correctness of the recipient's public key",
        "explanation": "Public-key encryption requires the recipient's corresponding private key to decrypt data encrypted to the recipient's public key; using the wrong key pair prevents decryption."
      },
      {
        "key": "C",
        "text": "The strength of the encryption algorithm",
        "explanation": "The strength of the encryption algorithm does not normally explain why a correctly encrypted message cannot be decrypted."
      },
      {
        "key": "D",
        "text": "The sender's digital signature",
        "explanation": "A sender's signature authenticates the sender and message integrity; it is separate from the recipient's ability to decrypt the ciphertext."
      }
    ],
    "correct_option": "B",
    "correct_answer": "The correctness of the recipient's public key",
    "explanation": "Public-key encryption requires the recipient's corresponding private key to decrypt data encrypted to the recipient's public key; using the wrong key pair prevents decryption."
  },
  {
    "id": "cn-113",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "Network Security & Wireless",
    "difficulty": "medium",
    "title": "Network Security & Wireless • Question #113",
    "question": "How can network administrators detect and mitigate a man-in-the-middle (MitM) attack?",
    "options": [
      {
        "key": "A",
        "text": "Implementing stronger encryption algorithms",
        "explanation": "Stronger encryption does not by itself authenticate that the endpoint is the intended server; authenticated TLS certificates are important for MitM resistance."
      },
      {
        "key": "B",
        "text": "Regularly updating firewall rules",
        "explanation": "Firewall updates can improve network filtering but do not directly authenticate the remote endpoint."
      },
      {
        "key": "C",
        "text": "Using digital certificates and HTTPS",
        "explanation": "HTTPS with properly validated digital certificates authenticates the server and encrypts the channel, making interception and impersonation substantially harder."
      },
      {
        "key": "D",
        "text": "Using network monitoring tools",
        "explanation": "Monitoring can help detect suspicious activity, but it does not itself prevent a MitM attacker from impersonating an endpoint."
      }
    ],
    "correct_option": "C",
    "correct_answer": "Using digital certificates and HTTPS",
    "explanation": "HTTPS with properly validated digital certificates authenticates the server and encrypts the channel, making interception and impersonation substantially harder."
  },
  {
    "id": "cn-114",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "Network Security & Wireless",
    "difficulty": "hard",
    "title": "Network Security & Wireless • Question #114",
    "question": "Which frequency band is not commonly used by Wi-Fi networks?",
    "options": [
      {
        "key": "A",
        "text": "2.4 GHz",
        "explanation": "2.4 GHz is one of the most widely used Wi-Fi bands."
      },
      {
        "key": "B",
        "text": "5 GHz",
        "explanation": "5 GHz is a standard Wi-Fi band and is widely deployed."
      },
      {
        "key": "C",
        "text": "900 MHz",
        "explanation": "900 MHz is not one of the conventional mainstream Wi-Fi bands used by ordinary 802.11 WLANs."
      },
      {
        "key": "D",
        "text": "60 GHz",
        "explanation": "60 GHz is used by Wi-Fi 6E/7-related families only in broader discussions? Conventional 802.11ad/ay WiGig operates around 60 GHz, so it is a legitimate Wi-Fi frequency range."
      }
    ],
    "correct_option": "C",
    "correct_answer": "900 MHz",
    "explanation": "900 MHz is not one of the conventional mainstream Wi-Fi bands used by ordinary 802.11 WLANs."
  },
  {
    "id": "cn-115",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "Network Security & Wireless",
    "difficulty": "easy",
    "title": "Network Security & Wireless • Question #115",
    "question": "What is the primary purpose of the Mobile IP protocol?",
    "options": [
      {
        "key": "A",
        "text": "To secure wireless communications",
        "explanation": "Mobile IP is designed for mobility management rather than general wireless security."
      },
      {
        "key": "B",
        "text": "To manage mobile device power consumption",
        "explanation": "Power management is a mobile-device operating-system concern, not the primary purpose of Mobile IP."
      },
      {
        "key": "C",
        "text": "To enable devices to move across networks without losing connectivity",
        "explanation": "Mobile IP allows a device to retain reachability while moving between networks by maintaining mobility-related addressing/forwarding."
      },
      {
        "key": "D",
        "text": "To compress data for faster transmission",
        "explanation": "Compression is unrelated to Mobile IP's mobility-management function."
      }
    ],
    "correct_option": "C",
    "correct_answer": "To enable devices to move across networks without losing connectivity",
    "explanation": "Mobile IP allows a device to retain reachability while moving between networks by maintaining mobility-related addressing/forwarding."
  },
  {
    "id": "cn-116",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "Network Security & Wireless",
    "difficulty": "medium",
    "title": "Network Security & Wireless • Question #116",
    "question": "In the context of mobile computing, what is edge computing?",
    "options": [
      {
        "key": "A",
        "text": "Processing data in a central data center",
        "explanation": "Central data-center processing is the opposite of the low-latency placement emphasized by edge computing."
      },
      {
        "key": "B",
        "text": "Storing data exclusively on the mobile device",
        "explanation": "Edge computing does not require storing everything exclusively on the mobile device."
      },
      {
        "key": "C",
        "text": "Processing data near the source of data generation",
        "explanation": "Edge computing places processing and often storage closer to where data is produced, reducing latency and backhaul traffic."
      },
      {
        "key": "D",
        "text": "Using cloud storage as the only data storage option",
        "explanation": "Cloud storage can coexist with edge computing, but edge architecture does not require the cloud to be the only storage option."
      }
    ],
    "correct_option": "C",
    "correct_answer": "Processing data near the source of data generation",
    "explanation": "Edge computing places processing and often storage closer to where data is produced, reducing latency and backhaul traffic."
  },
  {
    "id": "cn-117",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "Network Security & Wireless",
    "difficulty": "hard",
    "title": "Network Security & Wireless • Question #117",
    "question": "Which technology underpins the LTE (Long Term Evolution) standard for mobile communication?",
    "options": [
      {
        "key": "A",
        "text": "GSM",
        "explanation": "GSM is a 2G cellular technology family; LTE uses a different radio-access design."
      },
      {
        "key": "B",
        "text": "CDMA",
        "explanation": "CDMA techniques influenced earlier cellular generations, but LTE downlink uses OFDMA."
      },
      {
        "key": "C",
        "text": "OFDMA",
        "explanation": "OFDMA is the multiple-access technology used on LTE's downlink radio interface."
      },
      {
        "key": "D",
        "text": "TDMA",
        "explanation": "TDMA was important in earlier cellular systems but is not the principal LTE radio-access technology."
      }
    ],
    "correct_option": "C",
    "correct_answer": "OFDMA",
    "explanation": "OFDMA is the multiple-access technology used on LTE's downlink radio interface."
  },
  {
    "id": "cn-118",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "Network Security & Wireless",
    "difficulty": "easy",
    "title": "Network Security & Wireless • Question #118",
    "question": "How do MIMO (Multiple Input Multiple Output) technologies improve wireless network performance?",
    "options": [
      {
        "key": "A",
        "text": "By encrypting data transmissions",
        "explanation": "MIMO is not primarily an encryption mechanism."
      },
      {
        "key": "B",
        "text": "By increasing the range of frequencies used",
        "explanation": "MIMO does not mean simply expanding the frequency range; it exploits multiple spatial signal paths."
      },
      {
        "key": "C",
        "text": "By using multiple antennas for transmission and reception",
        "explanation": "Multiple transmit and receive antennas allow spatial multiplexing, diversity, and beamforming benefits that can increase throughput and reliability."
      },
      {
        "key": "D",
        "text": "By compressing the data transmitted",
        "explanation": "Compression reduces payload size but does not describe the antenna technique used by MIMO."
      }
    ],
    "correct_option": "C",
    "correct_answer": "By using multiple antennas for transmission and reception",
    "explanation": "Multiple transmit and receive antennas allow spatial multiplexing, diversity, and beamforming benefits that can increase throughput and reliability."
  },
  {
    "id": "cn-119",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "Network Security & Wireless",
    "difficulty": "medium",
    "title": "Network Security & Wireless • Question #119",
    "question": "What challenge does the hidden node problem pose in wireless networks?",
    "options": [
      {
        "key": "A",
        "text": "Difficulty in achieving synchronization",
        "explanation": "The hidden-node problem is primarily about stations that cannot hear one another transmitting toward the same receiver."
      },
      {
        "key": "B",
        "text": "Increased risk of data interception",
        "explanation": "Hidden nodes can increase collisions, not simply the risk of interception."
      },
      {
        "key": "C",
        "text": "Interference and collision of data transmissions",
        "explanation": "Simultaneous transmissions from hidden stations can interfere at the receiver and cause collisions or retransmissions."
      },
      {
        "key": "D",
        "text": "Excessive energy consumption",
        "explanation": "Hidden nodes are not primarily an energy-consumption problem, although repeated retransmissions can indirectly waste energy."
      }
    ],
    "correct_option": "C",
    "correct_answer": "Interference and collision of data transmissions",
    "explanation": "Simultaneous transmissions from hidden stations can interfere at the receiver and cause collisions or retransmissions."
  },
  {
    "id": "cn-120",
    "subSection": "computer-network",
    "category": "Computer Network",
    "topic": "Network Security & Wireless",
    "difficulty": "hard",
    "title": "Network Security & Wireless • Question #120",
    "question": "What is the main advantage of using SDN (Software Defined Networking) in wireless networks?",
    "options": [
      {
        "key": "A",
        "text": "Enhanced security against cyber threats",
        "explanation": "SDN can support security functions, but enhanced security is not its defining advantage in wireless networking."
      },
      {
        "key": "B",
        "text": "Simplified hardware requirements",
        "explanation": "SDN does not primarily simplify hardware requirements; its main change is where control and management logic is placed."
      },
      {
        "key": "C",
        "text": "Flexible network management and configuration",
        "explanation": "Software-defined control provides centralized or programmable policy, making network configuration and management more flexible."
      },
      {
        "key": "D",
        "text": "Increased data transfer speeds",
        "explanation": "SDN can optimize performance, but increased raw data-transfer speed is not its fundamental advantage."
      }
    ],
    "correct_option": "C",
    "correct_answer": "Flexible network management and configuration",
    "explanation": "Software-defined control provides centralized or programmable policy, making network configuration and management more flexible."
  }
];
