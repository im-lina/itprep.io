const studyData = {
  '시스템 보안': {
    color: 'bg-blue-500',
    topics: {
      '접근통제': {
        concept: '시스템 자원에 대한 접근을 제어하여 인가된 사용자만 접근할 수 있도록 하는 보안 메커니즘입니다. 접근통제는 정보보안의 3대 요소(기밀성, 무결성, 가용성)를 보장하는 핵심 기술이며, 주체(Subject), 객체(Object), 참조 모니터(Reference Monitor)의 3가지 요소로 구성됩니다.',
        keywords: ['DAC', 'MAC', 'RBAC', 'BLP 모델', 'Biba 모델', 'ACL', 'Capability', 'Clark-Wilson', 'Chinese Wall', 'ABAC'],
        mustKnow: [
          { text: 'DAC (임의적 접근통제): 소유자가 임의로 권한 부여, 유연하지만 보안 취약', highlight: true },
          { text: 'MAC (강제적 접근통제): 시스템이 중앙 집중식 통제, 보안등급 기반, 군사용', highlight: true },
          { text: 'RBAC (역할 기반): 역할에 따라 권한 부여, 기업에서 많이 사용', highlight: false },
          { text: 'BLP 모델: 기밀성(Confidentiality) 중심 - No Read Up(상향읽기금지), No Write Down(하향쓰기금지)', highlight: true },
          { text: 'Biba 모델: 무결성(Integrity) 중심 - No Read Down(하향읽기금지), No Write Up(상향쓰기금지)', highlight: true },
          { text: 'Clark-Wilson: 무결성 모델, 잘 정의된 트랜잭션(WFT), 무결성 검증 절차(IVP)', highlight: false },
          { text: 'Chinese Wall: 이해충돌 방지, 경쟁사 정보 동시 접근 차단', highlight: false },
          { text: 'ACL (Access Control List): 객체 중심, 각 파일/폴더마다 권한 목록', highlight: false },
          { text: 'Capability: 주체 중심, 사용자가 티켓처럼 권한 소지', highlight: false },
          { text: 'ABAC (속성 기반): 사용자/자원/환경 속성으로 동적 제어', highlight: false }
        ],
        tips: [
          '🎯 BLP vs Biba 헷갈림 해결법: "BLP는 기밀성(Be Low Please) - 비밀 유출 방지가 목적이므로 위로 읽기 금지(상급자 문서 못봄), 아래로 쓰기 금지(하급자에게 정보 유출 방지)"',
          '🎯 Biba는 무결성(Be Integrity By Ascending) - 오염 방지가 목적이므로 아래로 읽기 금지(오염된 데이터 읽기 방지), 위로 쓰기 금지(상위 데이터 오염 방지)',
          '💡 DAC은 소유자 마음대로 = 위험, MAC은 시스템이 강제 = 안전 but 불편',
          '💡 시험 함정: "BLP에서 기밀등급 높은 사람이 낮은 등급에 쓸 수 있나?" → NO! (Write Down 금지)'
        ],
        comparison: {
          title: 'DAC vs MAC vs RBAC 비교',
          headers: ['구분', 'DAC', 'MAC', 'RBAC'],
          rows: [
            ['제어 주체', '소유자', '시스템', '관리자'],
            ['유연성', '높음', '낮음', '중간'],
            ['보안성', '낮음', '높음', '중간'],
            ['사용 환경', '일반 기업', '군사/정부', '대기업'],
            ['예시', 'Windows 파일 권한', '군사 기밀', '사원/관리자 역할']
          ]
        },
        quiz: [
          { q: 'BLP 모델은 기밀성을 보장하는 모델이다', a: true },
          { q: 'DAC는 시스템이 중앙에서 접근을 통제한다', a: false },
          { q: 'RBAC는 역할 기반 접근통제이다', a: true },
          { q: 'Biba 모델은 기밀성 중심 모델이다', a: false },
          { q: 'MAC은 보안등급 기반으로 동작한다', a: true }
        ]
      },
      '운영체제 보안': {
        concept: '운영체제는 시스템의 핵심으로 모든 자원을 관리합니다. OS 보안 취약점은 전체 시스템을 위협하므로 커널 보호, 파일 시스템 보안, 프로세스 격리 등이 중요합니다. Unix/Linux 시스템의 권한 관리와 Windows의 보안 메커니즘을 이해해야 합니다.',
        keywords: ['SetUID/SetGID', 'Sticky bit', '파일 권한', 'umask', 'chroot', 'SELinux', 'AppArmor', '커널 모드', '사용자 모드', 'Buffer Overflow'],
        mustKnow: [
          { text: 'SetUID(4000): 실행 시 파일 소유자 권한으로 실행, /usr/bin/passwd가 대표적', highlight: true },
          { text: 'SetGID(2000): 실행 시 그룹 권한으로 실행, 디렉터리에 설정 시 생성 파일이 해당 그룹 소유', highlight: true },
          { text: 'Sticky bit(1000): /tmp 디렉터리, 소유자만 삭제 가능 (다른 사람 파일 삭제 방지)', highlight: true },
          { text: '파일 기본 권한: 파일 666(rw-rw-rw-), 디렉터리 777(rwxrwxrwx)', highlight: true },
          { text: 'umask 022: 666-022=644(rw-r--r--), 777-022=755(rwxr-xr-x)', highlight: true },
          { text: 'chmod 4755 = SetUID + rwxr-xr-x (4+7+5+5)', highlight: false },
          { text: 'chroot: 루트 디렉터리 변경, 프로세스를 특정 디렉터리에 가둠 (jail)', highlight: false },
          { text: 'SELinux: 강제 접근통제(MAC) 구현, 프로세스별 정책 적용', highlight: false },
          { text: 'Buffer Overflow 방어: ASLR(주소 랜덤화), DEP(실행방지), Stack Canary', highlight: false },
          { text: 'sudo: 일시적 root 권한, 로그 기록, su보다 안전', highlight: false }
        ],
        tips: [
          '🎯 SetUID 암기법: "4천원(4000)으로 Set U(소유자) 권한 ID 획득"',
          '🎯 Sticky bit 암기법: "천원(1000)으로 끈적이(sticky)게 붙여서 내 것만 삭제"',
          '💡 umask 계산 실수 주의: 666에서 빼는 거지, 권한을 더하는 게 아님!',
          '💡 시험 함정: "SetUID 파일을 일반 사용자가 실행하면?" → 소유자 권한으로 실행됨 (본인 권한 아님)',
          '🔥 /etc/passwd는 읽기 가능, /etc/shadow는 root만 읽기 가능 (암호 해시 보호)'
        ],
        comparison: {
          title: '특수 권한 비트',
          headers: ['비트', '8진수', '기호', '의미', '주 사용처'],
          rows: [
            ['SetUID', '4000', 's (소유자 x)', '소유자 권한 실행', '/usr/bin/passwd'],
            ['SetGID', '2000', 's (그룹 x)', '그룹 권한 실행', '공유 디렉터리'],
            ['Sticky', '1000', 't (기타 x)', '소유자만 삭제', '/tmp']
          ]
        },
        quiz: [
          { q: 'SetUID 비트는 8진수로 4000이다', a: true },
          { q: 'Sticky bit는 누구나 삭제할 수 있게 한다', a: false },
          { q: 'umask는 기본 권한을 설정한다', a: false },
          { q: '파일의 기본 권한은 666이다', a: true },
          { q: 'chmod 755는 rwxr-xr-x를 의미한다', a: true }
        ]
      },
      '인증 (Authentication)': {
        concept: '인증은 사용자가 주장하는 신원이 맞는지 확인하는 과정입니다. "당신이 당신임을 어떻게 증명하는가?"가 핵심이며, 알고 있는 것(Knowledge), 가지고 있는 것(Possession), 생체 정보(Inherence) 3가지 요소로 분류됩니다. 다중 인증(MFA)은 2개 이상 요소를 결합하여 보안을 강화합니다.',
        keywords: ['패스워드', 'OTP', '생체인증', 'Challenge-Response', 'Kerberos', 'SSO', 'RADIUS', 'TACACS+', 'OAuth', 'SAML', '다중인증(MFA)'],
        mustKnow: [
          { text: '인증 3요소: ① 지식(패스워드) ② 소유(토큰/OTP) ③ 존재(생체)', highlight: true },
          { text: 'Challenge-Response: 서버가 난수(Challenge) 전송 → 클라이언트가 암호화해서 응답(Response), 패스워드 전송 안함', highlight: true },
          { text: 'Kerberos: 티켓 기반 인증, TGT(Ticket Granting Ticket) + TGS(Ticket Granting Server), 포트 88/UDP', highlight: true },
          { text: 'OTP 방식: ① HOTP(횟수 동기화) ② TOTP(시간 동기화, 30초마다 변경)', highlight: true },
          { text: 'SSO (Single Sign-On): 한 번 로그인으로 여러 시스템 접근, 편리 but 단일 장애점', highlight: true },
          { text: 'RADIUS: 원격 인증 서버, UDP 1812(인증) 1813(과금), 패스워드 암호화', highlight: false },
          { text: 'TACACS+: Cisco 장비 인증, TCP 49, 전체 패킷 암호화, 인증/권한/과금 분리', highlight: false },
          { text: 'OAuth 2.0: 권한 위임 프로토콜, Access Token 발급 (페이스북 로그인 등)', highlight: false },
          { text: 'SAML: XML 기반 SSO, 기업용 웹 SSO에 사용', highlight: false },
          { text: '생체인증 오류: FRR(본인 거부율-엄격), FAR(타인 수락율-위험), CER(교차점)', highlight: true },
          { text: 'Zero Knowledge Proof: 비밀을 공개하지 않고 알고 있음을 증명', highlight: false }
        ],
        tips: [
          '🎯 Kerberos 암기: "머리(Kerberos) 세 개 달린 개 → TGT(입장권 받기), TGS(서비스권 받기), AP(실제 서비스)"',
          '🎯 RADIUS vs TACACS+ 구분: "RADIUS는 UDP(빠름, 덜 안전), TACACS+는 TCP(느림, 더 안전)"',
          '💡 FRR vs FAR: "FRR은 False Reject(본인 거부-불편), FAR은 False Accept(타인 수락-위험)"',
          '💡 SSO 함정: 편리하지만 한 번 뚫리면 모든 시스템 접근 가능 → 다중인증 필수',
          '🔥 OTP는 재사용 불가! HOTP는 카운터 기반, TOTP는 시간 기반 (Google Authenticator)'
        ],
        comparison: {
          title: 'RADIUS vs TACACS+',
          headers: ['구분', 'RADIUS', 'TACACS+'],
          rows: [
            ['프로토콜', 'UDP', 'TCP'],
            ['포트', '1812/1813', '49'],
            ['암호화', '패스워드만', '전체 패킷'],
            ['AAA 분리', '인증+권한 통합', '완전 분리'],
            ['주 사용처', '일반 네트워크', 'Cisco 장비']
          ]
        },
        quiz: [
          { q: 'Kerberos는 티켓 기반 인증 시스템이다', a: true },
          { q: 'OTP는 여러 번 사용할 수 있다', a: false },
          { q: 'FRR은 본인을 거부하는 비율이다', a: true },
          { q: 'RADIUS는 TCP 프로토콜을 사용한다', a: false },
          { q: 'SSO는 한 번 로그인으로 여러 시스템에 접근할 수 있다', a: true }
        ]
      }
    }
  },
  '네트워크 보안': {
    color: 'bg-green-500',
    topics: {
      'TCP/IP 프로토콜': {
        concept: 'TCP/IP는 인터넷의 표준 프로토콜로, 4계층(응용-전송-인터넷-네트워크)으로 구성됩니다. 각 계층별 프로토콜의 동작 원리와 보안 취약점을 이해해야 합니다. TCP는 연결 지향/신뢰성 제공, UDP는 비연결/빠른 전송이 특징입니다.',
        keywords: ['TCP', 'UDP', 'IP', 'ICMP', 'ARP', '3-way handshake', '4-way handshake', 'Port', 'Socket'],
        mustKnow: [
          { text: 'TCP 3-way handshake: SYN → SYN+ACK → ACK (연결 수립)', highlight: true },
          { text: 'TCP 4-way handshake: FIN → ACK → FIN → ACK (연결 종료)', highlight: true },
          { text: 'Well-known Port (0~1023): FTP(20,21), SSH(22), Telnet(23), SMTP(25), DNS(53), HTTP(80), HTTPS(443)', highlight: true },
          { text: 'Registered Port (1024~49151): 등록된 애플리케이션, MySQL(3306), RDP(3389)', highlight: false },
          { text: 'Dynamic Port (49152~65535): 클라이언트 임시 포트', highlight: false },
          { text: 'TCP 플래그: SYN(연결), ACK(응답), FIN(종료), RST(리셋), PSH(즉시 전달), URG(긴급)', highlight: true },
          { text: 'ICMP: IP 계층 프로토콜, ping(Echo Request/Reply), traceroute, Destination Unreachable', highlight: false },
          { text: 'ARP: IP → MAC 주소 변환, 브로드캐스트 요청, 유니캐스트 응답', highlight: true },
          { text: 'RARP: MAC → IP 주소 변환 (디스크 없는 워크스테이션)', highlight: false },
          { text: 'IP 헤더: 버전(4/6), TTL(홉 수), Protocol(TCP=6, UDP=17, ICMP=1)', highlight: false },
          { text: 'IPv4: 32bit (8bit × 4), 약 43억 개 주소', highlight: false },
          { text: 'IPv6: 128bit (16bit × 8), 340언데실리온 개 주소, IPSec 기본 탑재', highlight: false }
        ],
        tips: [
          '🎯 포트 암기법: "FTP는 20살 21살(20,21), SSH는 22살, HTTP는 80년대생, HTTPS는 443=사사삼"',
          '🎯 3-way handshake: "신(SYN) 청하면, 신(SYN)+악(ACK) 수하고, 악(ACK) 수한다"',
          '💡 TCP vs UDP: "택배(TCP)는 확인하고 받지만, 방송(UDP)은 확인 안함"',
          '🔥 시험 함정: "ARP는 어느 계층?" → 데이터링크 계층(2계층)이지만 IP 사용 (2.5계층)',
          '💡 TTL이 0되면 패킷 폐기 → traceroute는 이를 이용 (TTL 1씩 증가시키며 경로 추적)'
        ],
        comparison: {
          title: 'TCP vs UDP',
          headers: ['구분', 'TCP', 'UDP'],
          rows: [
            ['연결', '연결 지향 (3-way)', '비연결'],
            ['신뢰성', '보장 (재전송)', '보장 안함'],
            ['순서', '순서 보장', '순서 무관'],
            ['속도', '느림 (오버헤드)', '빠름'],
            ['헤더', '20~60 bytes', '8 bytes'],
            ['사용 예', 'HTTP, FTP, 이메일', 'DNS, VoIP, 스트리밍']
          ]
        },
        quiz: [
          { q: 'HTTP의 기본 포트는 80번이다', a: true },
          { q: 'UDP는 연결 지향 프로토콜이다', a: false },
          { q: 'ARP는 MAC을 IP로 변환한다', a: false },
          { q: 'TCP 3-way handshake는 SYN-SYN/ACK-ACK 순서다', a: true },
          { q: 'HTTPS는 443 포트를 사용한다', a: true }
        ]
      },
      '방화벽 (Firewall)': {
        concept: '방화벽은 내부 네트워크와 외부 네트워크 사이에서 트래픽을 검사하고 통제하는 보안 장비입니다. 세대별 진화 과정과 각 방식의 장단점을 이해해야 합니다.',
        keywords: ['패킷 필터링', 'Stateful', 'Proxy', 'NAT', 'DMZ', 'ACL', 'UTM', 'NGFW', 'WAF'],
        mustKnow: [
          { text: '1세대 패킷 필터링: IP, Port, Protocol 기반, 빠르지만 세션 상태 모름', highlight: true },
          { text: '2세대 Stateful Inspection: 세션 상태 추적, 연결 테이블 유지, 동적 포트 허용', highlight: true },
          { text: '3세대 Application Proxy: 응용 계층 검사, 내용 필터링, 느리지만 안전', highlight: true },
          { text: 'NAT (Network Address Translation): 사설IP ↔ 공인IP 변환, IP 부족 해결', highlight: true },
          { text: 'DMZ (DeMilitarized Zone): 완충 지대, 외부 서비스 배치 (웹서버, 메일서버)', highlight: true },
          { text: 'ACL (Access Control List): 허용/차단 규칙, 위에서 아래로 순차 적용, 마지막은 묵시적 거부', highlight: true },
          { text: 'UTM (Unified Threat Management): 통합 보안, 방화벽+IPS+안티바이러스+VPN', highlight: false },
          { text: 'NGFW (Next Generation Firewall): 응용/사용자 인식, SSL 복호화, 위협 인텔리전스', highlight: false },
          { text: 'WAF (Web Application Firewall): 웹 공격 차단, SQL Injection, XSS 방어, L7', highlight: false },
          { text: 'Bastion Host: 외부 접근을 위한 요새 호스트, 강화된 보안 설정', highlight: false },
          { text: 'Screened Subnet: 두 개의 방화벽으로 DMZ 구성, 이중 보호', highlight: false }
        ],
        tips: [
          '🎯 방화벽 세대: "1세대(포트만 봄) → 2세대(상태까지 봄) → 3세대(내용까지 봄)"',
          '💡 DMZ에는 외부에서 접근할 서버만 배치 (웹, 메일, DNS), DB는 내부망!',
          '🔥 NAT는 보안 기능 아님! IP 절약이 주 목적, 부수적 보안 효과만',
          '💡 ACL 순서 중요: 특정 규칙을 위에, 일반 규칙을 아래에 배치',
          '🎯 Stateful vs Stateless: "Stateful은 대화 기억, Stateless는 한 문장만 봄"'
        ],
        comparison: {
          title: '방화벽 유형 비교',
          headers: ['세대', '방식', '검사 계층', '속도', '보안성'],
          rows: [
            ['1세대', '패킷 필터링', 'L3/L4', '빠름', '낮음'],
            ['2세대', 'Stateful', 'L3/L4', '보통', '보통'],
            ['3세대', 'Proxy', 'L7', '느림', '높음'],
            ['차세대', 'NGFW', 'L2~L7', '보통', '매우 높음']
          ]
        },
        quiz: [
          { q: 'DMZ는 내부망과 외부망 사이에 위치한다', a: true },
          { q: '패킷 필터링은 세션 상태를 추적한다', a: false },
          { q: 'NAT는 IP 주소를 변환한다', a: true },
          { q: 'Stateful 방화벽은 1세대 방화벽이다', a: false },
          { q: 'ACL은 위에서 아래로 순차적으로 적용된다', a: true }
        ]
      },
      'VPN (Virtual Private Network)': {
        concept: 'VPN은 공중 네트워크(인터넷)를 통해 안전한 사설 네트워크처럼 통신하는 기술입니다. 터널링, 암호화, 인증을 통해 보안을 제공합니다.',
        keywords: ['IPSec', 'SSL VPN', 'PPTP', 'L2TP', 'IKE', 'ESP', 'AH', 'Tunneling'],
        mustKnow: [
          { text: 'IPSec: IP 계층 VPN, ESP + AH + IKE 조합, 사이트간 VPN', highlight: true },
          { text: 'ESP (Encapsulating Security Payload): 암호화 + 인증, Protocol 50', highlight: true },
          { text: 'AH (Authentication Header): 인증만 (암호화 없음), Protocol 51, NAT 통과 불가', highlight: true },
          { text: 'IKE (Internet Key Exchange): 키 협상, UDP 500, Phase 1(ISAKMP SA) + Phase 2(IPSec SA)', highlight: true },
          { text: 'IPSec 모드: ① Transport(페이로드만) ② Tunnel(전체 패킷)', highlight: true },
          { text: 'SSL VPN: 웹 브라우저 기반, TCP 443, 클라이언트 설치 불필요, 원격 접속용', highlight: true },
          { text: 'PPTP: MS 개발, TCP 1723, 암호화 약함 (MPPE), 사용 권장 안함', highlight: false },
          { text: 'L2TP: PPTP + L2F, UDP 1701, 암호화 없음 → IPSec과 함께 사용 (L2TP/IPSec)', highlight: false },
          { text: 'GRE (Generic Routing Encapsulation): Cisco, 멀티캐스트 지원, 암호화 없음', highlight: false },
          { text: 'MPLS VPN: 통신사업자 망, 레이블 스위칭, 빠름', highlight: false }
        ],
        tips: [
          '🎯 ESP vs AH: "ESP는 암호화(Encrypt)+인증, AH는 인증(Authenticate)만"',
          '💡 IPSec은 복잡, SSL VPN은 간단 → 원격근무는 SSL VPN 많이 씀',
          '🔥 AH는 NAT 통과 불가! IP 헤더 변조 감지하므로',
          '🎯 IKE Phase 1은 VPN 터널 만들기, Phase 2는 실제 데이터 암호화 협상',
          '💡 PPTP는 취약하니 시험 답으로 선택 금지!'
        ],
        comparison: {
          title: 'VPN 프로토콜 비교',
          headers: ['프로토콜', '계층', '포트', '암호화', '특징'],
          rows: [
            ['IPSec', 'L3', '50, 51, 500', '강력', '사이트간 VPN'],
            ['SSL VPN', 'L5', '443', '강력', '원격 접속, 웹기반'],
            ['PPTP', 'L2', '1723', '약함', '구형, 비권장'],
            ['L2TP/IPSec', 'L2', '1701+IPSec', '강력', 'L2TP+IPSec 조합']
          ]
        },
        quiz: [
          { q: 'ESP는 암호화와 인증을 모두 제공한다', a: true },
          { q: 'AH는 암호화를 제공한다', a: false },
          { q: 'SSL VPN은 443 포트를 사용한다', a: true },
          { q: 'IPSec은 ESP, AH, IKE로 구성된다', a: true },
          { q: 'PPTP는 보안이 강력하여 많이 사용된다', a: false }
        ]
      }
    }
  },
  '애플리케이션 보안': {
    color: 'bg-purple-500',
    topics: {
      '웹 해킹 - SQL Injection': {
        concept: 'SQL Injection은 웹 애플리케이션의 입력값을 조작하여 의도하지 않은 SQL 쿼리를 실행시키는 공격입니다. OWASP Top 10 1위로, 로그인 우회, 데이터 유출, 변조, 삭제 등 심각한 피해를 초래할 수 있습니다.',
        keywords: ['SQL Injection', 'Prepared Statement', 'Blind SQL Injection', 'Union-based', 'Error-based', 'Time-based'],
        mustKnow: [
          { text: 'SQL Injection: DB 쿼리 조작, 로그인 우회, 데이터 유출/변조/삭제', highlight: true },
          { text: "SQL Injection 예시: admin' OR '1'='1'-- (항상 참, 로그인 우회)", highlight: true },
          { text: 'SQL Injection 방어: ① Prepared Statement (가장 안전) ② Stored Procedure ③ 입력값 검증', highlight: true },
          { text: "Blind SQL Injection: 결과가 화면에 안나옴, 참/거짓 반응으로 추론, 시간 지연(SLEEP) 이용", highlight: false },
          { text: 'Union-based: UNION 명령어로 여러 쿼리 결과 결합', highlight: false },
          { text: 'Error-based: 오류 메시지로 DB 정보 수집', highlight: false },
          { text: 'Time-based: SLEEP 함수로 시간 지연 확인', highlight: false },
          { text: 'ORM (Object-Relational Mapping): 객체-DB 매핑, SQL Injection 자동 방어', highlight: false }
        ],
        tips: [
          '🎯 SQL Injection 핵심: "사용자 입력을 쿼리 일부로 착각하게 만들기"',
          "💡 ' OR '1'='1 암기법: 작은따옴표로 문자열 닫고, OR로 항상 참 만들고, --로 뒤 주석처리",
          '🔥 Prepared Statement는 쿼리와 데이터를 분리 → 완벽한 방어',
          '💡 입력값 검증 시 Blacklist보다 Whitelist 방식이 안전'
        ],
        quiz: [
          { q: 'SQL Injection 방어를 위해 Prepared Statement를 사용한다', a: true },
          { q: "admin' OR '1'='1'--는 SQL Injection 공격 구문이다", a: true },
          { q: 'Blind SQL Injection은 결과가 화면에 표시된다', a: false },
          { q: 'ORM을 사용하면 SQL Injection을 자동으로 방어할 수 있다', a: true }
        ]
      },
      '웹 해킹 - XSS': {
        concept: 'XSS(Cross-Site Scripting)는 웹페이지에 악성 스크립트를 삽입하여 다른 사용자의 브라우저에서 실행시키는 공격입니다. 쿠키 탈취, 세션 하이재킹, 피싱 등에 악용됩니다.',
        keywords: ['Stored XSS', 'Reflected XSS', 'DOM-based XSS', 'Cookie', 'Session', 'Same-Origin Policy', 'CSP', 'HTML Encoding'],
        mustKnow: [
          { text: 'Stored XSS (저장형): 서버에 저장, 게시판/댓글, 지속적 피해, 가장 위험', highlight: true },
          { text: 'Reflected XSS (반사형): URL 파라미터, 클릭 유도 필요, 일회성', highlight: true },
          { text: 'DOM-based XSS: 클라이언트 측 스크립트 조작, 서버 무관', highlight: false },
          { text: 'XSS 공격 예시: <script>alert(document.cookie)</script> (쿠키 탈취)', highlight: true },
          { text: 'XSS 방어: ① HTML Encoding (< → &lt;) ② 입력값 필터링 ③ HttpOnly 쿠키 ④ CSP', highlight: true },
          { text: 'HttpOnly 쿠키: JavaScript로 접근 불가, XSS로 쿠키 탈취 방지', highlight: true },
          { text: 'Secure 쿠키: HTTPS에서만 전송, 평문 도청 방지', highlight: false },
          { text: 'CSP (Content Security Policy): 실행 가능한 스크립트 출처 제한', highlight: false },
          { text: 'Same-Origin Policy: 다른 출처의 데이터 접근 차단, XSS 영향 최소화', highlight: false }
        ],
        tips: [
          '🎯 XSS 유형 암기: "저장형(Stored)은 DB 저장돼서 계속 피해, 반사형(Reflected)은 URL로 반사돼서 한번 피해"',
          '💡 <script>alert(1)</script>는 XSS 테스트용, 실전은 쿠키 탈취나 악성 사이트 연결',
          '🔥 HTML Encoding이 핵심: < > " \' & 등을 &lt; &gt; &quot; &#39; &amp;로 변환',
          '🎯 HttpOnly는 XSS 완벽 방어는 아님! 화면 변조나 키로깅은 여전히 가능',
          '💡 시험 함정: "XSS는 서버 공격?" → NO! 클라이언트(브라우저) 공격'
        ],
        comparison: {
          title: 'XSS 유형 비교',
          headers: ['유형', '저장 위치', '지속성', '위험도', '예시'],
          rows: [
            ['Stored', '서버 DB', '영구', '높음', '게시판 글/댓글'],
            ['Reflected', '없음 (URL)', '일시', '중간', '검색 결과 페이지'],
            ['DOM-based', '없음', '일시', '중간', '클라이언트 스크립트']
          ]
        },
        quiz: [
          { q: 'XSS는 서버 측 공격이다', a: false },
          { q: 'CSRF는 토큰으로 방어할 수 있다', a: true },
          { q: 'HttpOnly 쿠키는 JavaScript로 접근할 수 없다', a: true },
          { q: 'Stored XSS가 Reflected XSS보다 더 위험하다', a: true }
        ]
      },
      'OWASP Top 10': {
        concept: 'OWASP(Open Web Application Security Project)에서 발표하는 웹 애플리케이션 보안 취약점 Top 10입니다. 시험에 자주 출제되므로 순서와 내용을 암기해야 합니다.',
        keywords: ['Injection', 'Broken Authentication', 'Sensitive Data Exposure', 'XXE', 'Broken Access Control', 'Security Misconfiguration', 'XSS', 'Insecure Deserialization', 'Components', 'Logging'],
        mustKnow: [
          { text: 'A1. Injection: SQL, OS Command, LDAP 등 명령어 삽입', highlight: true },
          { text: 'A2. Broken Authentication: 인증/세션 관리 취약점, 세션 ID 예측/탈취', highlight: true },
          { text: 'A3. Sensitive Data Exposure: 민감 데이터 노출, 암호화 미흡', highlight: true },
          { text: 'A4. XML External Entities (XXE): XML 파서 취약점, 파일 읽기/SSRF', highlight: false },
          { text: 'A5. Broken Access Control: 권한 검증 미흡, URL 직접 입력으로 접근', highlight: true },
          { text: 'A6. Security Misconfiguration: 기본 설정 사용, 불필요한 서비스, 디버그 모드', highlight: true },
          { text: 'A7. Cross-Site Scripting (XSS): 악성 스크립트 삽입', highlight: true },
          { text: 'A8. Insecure Deserialization: 직렬화 데이터 조작, 원격 코드 실행', highlight: false },
          { text: 'A9. Using Components with Known Vulnerabilities: 취약한 라이브러리 사용', highlight: false },
          { text: 'A10. Insufficient Logging & Monitoring: 로그 부족, 공격 탐지 불가', highlight: false }
        ],
        tips: [
          '🎯 OWASP Top 10 순서 암기법: "인(Injection) 증(Authentication) 데(Data) X(XXE) 접(Access) 설(Configuration) X(XSS) 역(Deserialization) 컴(Components) 로(Logging)"',
          '💡 A1, A2, A3, A5, A6, A7이 특히 중요 (자주 출제)',
          '🔥 2017년과 2021년 버전 차이 있음 - 최신 버전 확인 필요',
          '🎯 각 취약점의 대응 방안도 함께 암기'
        ],
        quiz: [
          { q: 'OWASP Top 10 1위는 Injection이다', a: true },
          { q: 'XSS는 OWASP Top 10에 포함된다', a: true },
          { q: 'Broken Access Control은 A5번이다', a: true },
          { q: 'XXE는 JSON 파서의 취약점이다', a: false }
        ]
      }
    }
  },
  '정보보안 일반': {
    color: 'bg-red-500',
    topics: {
      '대칭키 암호': {
        concept: '대칭키 암호는 암호화와 복호화에 같은 키를 사용합니다. 빠르지만 키 배송 문제가 있어 실제로는 대량 데이터 암호화에 사용됩니다.',
        keywords: ['DES', '3DES', 'AES', 'SEED', 'ARIA', 'RC4', 'Blowfish', 'Twofish', '블록 암호', '스트림 암호'],
        mustKnow: [
          { text: 'DES (Data Encryption Standard): 56bit 키, 64bit 블록, Feistel 구조, 1999년 깨짐', highlight: true },
          { text: '3DES (Triple DES): DES 3번 적용 (암호화-복호화-암호화), 168bit 키 효과, 느림', highlight: true },
          { text: 'AES (Advanced Encryption Standard): 128/192/256bit 키, 128bit 블록, Rijndael 알고리즘 채택, 현재 표준', highlight: true },
          { text: 'AES 라운드 수: 128bit(10라운드), 192bit(12라운드), 256bit(14라운드)', highlight: true },
          { text: 'SEED: 한국 표준, 128bit 키, 128bit 블록, Feistel 구조', highlight: false },
          { text: 'ARIA: 한국 표준, AES와 유사, 128/192/256bit 키', highlight: false },
          { text: 'RC4: 스트림 암호, WEP에 사용, 취약점 발견되어 사용 금지', highlight: false },
          { text: 'Feistel 구조: 암호화=복호화 구조, DES/SEED 등', highlight: false },
          { text: 'SPN 구조: Substitution-Permutation Network, AES 등', highlight: false },
          { text: '블록 암호: 고정 크기 블록 단위 암호화 (AES, DES)', highlight: false },
          { text: '스트림 암호: 비트/바이트 단위 암호화 (RC4)', highlight: false }
        ],
        tips: [
          '🎯 AES 키 길이와 라운드: "128은 10번, 192는 12번, 256은 14번 - 2씩 증가"',
          '💡 DES는 56bit라 전수조사 가능 → 사용 금지, 3DES는 느려서 대체 중',
          '🔥 AES-128과 AES-256 차이: 키 길이만 다름, 블록은 둘다 128bit',
          '🎯 한국 표준 암호: SEED(구형), ARIA(신형) - 시험에 가끔 나옴',
          '💡 블록 암호는 빠르고 안전, 스트림 암호는 더 빠르지만 덜 안전'
        ],
        comparison: {
          title: '주요 대칭키 알고리즘',
          headers: ['알고리즘', '키 길이', '블록 크기', '라운드', '비고'],
          rows: [
            ['DES', '56bit', '64bit', '16', '사용 금지'],
            ['3DES', '168bit', '64bit', '48', '느림, 대체 중'],
            ['AES', '128/192/256bit', '128bit', '10/12/14', '현재 표준'],
            ['SEED', '128bit', '128bit', '16', '한국 표준'],
            ['ARIA', '128/192/256bit', '128bit', '12/14/16', '한국 표준']
          ]
        },
        quiz: [
          { q: 'AES는 대칭키 암호화 알고리즘이다', a: true },
          { q: 'DES는 현재도 안전하게 사용되고 있다', a: false },
          { q: 'AES-256은 256bit 블록 크기를 사용한다', a: false },
          { q: 'SEED는 한국의 표준 암호 알고리즘이다', a: true }
        ]
      },
      '공개키 암호': {
        concept: '공개키 암호는 두 개의 키(공개키, 개인키)를 사용합니다. 공개키로 암호화하면 개인키로만 복호화 가능하며, 키 배송 문제를 해결합니다.',
        keywords: ['RSA', 'ECC', 'ElGamal', 'Diffie-Hellman', '소인수분해', '이산대수', '타원곡선'],
        mustKnow: [
          { text: 'RSA: 소인수분해의 어려움 이용, 키 2048bit 이상, 전자서명+암호화', highlight: true },
          { text: 'RSA 암호화: 공개키(e, n)로 암호화, 개인키(d, n)로 복호화', highlight: true },
          { text: 'RSA 전자서명: 개인키로 서명, 공개키로 검증 (암호화 반대!)', highlight: true },
          { text: 'ECC (Elliptic Curve Cryptography): 타원곡선 이용, RSA보다 짧은 키로 같은 보안', highlight: true },
          { text: 'ECC vs RSA: ECC 256bit ≈ RSA 3072bit 보안 수준, 모바일에 적합', highlight: true },
          { text: 'Diffie-Hellman: 키 교환 프로토콜, 도청당해도 키 안전, 이산대수 문제', highlight: true },
          { text: 'DH 과정: ① 공개값(p, g) 공유 ② 각자 비밀값 선택 ③ 계산 결과 교환 ④ 공통 키 생성', highlight: false },
          { text: 'ElGamal: 이산대수 문제, 암호문이 평문의 2배', highlight: false },
          { text: '중간자 공격: DH는 인증 없음 → 중간자 공격 가능 → 인증 필요', highlight: true },
          { text: '양자컴퓨터 위협: RSA, DH는 Shor 알고리즘으로 깨짐 → 양자내성암호 연구', highlight: false }
        ],
        tips: [
          '🎯 RSA 암기법: "공개키로 잠그고(암호화), 개인키로 열고(복호화), 개인키로 도장(서명), 공개키로 확인(검증)"',
          '💡 전자서명은 암호화 반대! 개인키로 서명, 공개키로 검증',
          '🔥 RSA는 느림 → 실제로는 대칭키 암호화 후, 대칭키를 RSA로 암호화',
          '🎯 ECC는 짧은 키 = 빠름, 모바일/IoT에 유리',
          '💡 Diffie-Hellman은 암호화가 아닌 키 교환! 키를 안전하게 공유하는 게 목적'
        ],
        comparison: {
          title: 'RSA vs ECC',
          headers: ['구분', 'RSA', 'ECC'],
          rows: [
            ['기반 문제', '소인수분해', '타원곡선 이산대수'],
            ['키 길이', '2048~4096bit', '256~512bit'],
            ['속도', '느림', '빠름'],
            ['보안 강도', 'RSA 3072 = ECC 256', '같은 강도, 짧은 키'],
            ['사용처', '범용', '모바일, IoT']
          ]
        },
        quiz: [
          { q: 'RSA는 공개키 암호화 방식이다', a: true },
          { q: '전자서명은 공개키로 서명하고 개인키로 검증한다', a: false },
          { q: 'ECC는 RSA보다 짧은 키로 같은 보안을 제공한다', a: true },
          { q: 'Diffie-Hellman은 키 교환 프로토콜이다', a: true }
        ]
      },
      '해시 함수': {
        concept: '해시 함수는 임의 길이 데이터를 고정 길이 해시값으로 변환하는 단방향 함수입니다. 무결성 검증, 패스워드 저장 등에 사용됩니다.',
        keywords: ['SHA', 'MD5', 'SHA-1', 'SHA-256', 'SHA-512', '충돌', 'Rainbow Table', 'Salt', 'HMAC'],
        mustKnow: [
          { text: '해시 특성: ① 단방향 (복호화 불가) ② 고정 길이 출력 ③ 눈사태 효과 (1bit 변경 → 완전 다른 해시)', highlight: true },
          { text: '충돌 저항성: 같은 해시값 생성하는 다른 입력 찾기 어려움', highlight: true },
          { text: 'MD5: 128bit 출력, 충돌 발견, 사용 금지', highlight: true },
          { text: 'SHA-1: 160bit 출력, 충돌 발견 (2017), 사용 금지', highlight: true },
          { text: 'SHA-256: 256bit 출력, 현재 표준, 안전', highlight: true },
          { text: 'SHA-512: 512bit 출력, 더 안전하지만 느림', highlight: false },
          { text: 'SHA-3: Keccak 알고리즘, SHA-2와 구조 다름, 차세대', highlight: false },
          { text: 'HMAC: Hash + 비밀키, 메시지 인증 코드 (MAC), 무결성+인증', highlight: true },
          { text: 'Salt: 패스워드에 랜덤 값 추가, Rainbow Table 공격 방어, 패스워드마다 다름', highlight: true },
          { text: 'Rainbow Table: 미리 계산한 해시-평문 테이블, Salt로 무력화', highlight: true },
          { text: 'bcrypt/scrypt/PBKDF2: 패스워드 해싱 전용, 의도적으로 느림, 무차별 대입 방어', highlight: true }
        ],
        tips: [
          '🎯 해시는 단방향: "계란 프라이 → 계란으로 복구 불가"',
          '💡 MD5, SHA-1 절대 사용 금지! SHA-256 이상 사용',
          '🔥 패스워드 저장: bcrypt/scrypt/PBKDF2 사용, 단순 SHA-256은 취약 (빠름)',
          '🎯 Salt는 패스워드마다 랜덤 생성! 고정 Salt는 의미 없음',
          '💡 눈사태 효과: "hello"와 "Hello"의 해시는 완전히 다름'
        ],
        comparison: {
          title: '해시 알고리즘 비교',
          headers: ['알고리즘', '출력 길이', '충돌', '속도', '사용'],
          rows: [
            ['MD5', '128bit', '발견됨', '빠름', '금지'],
            ['SHA-1', '160bit', '발견됨', '빠름', '금지'],
            ['SHA-256', '256bit', '안전', '보통', '권장'],
            ['SHA-512', '512bit', '안전', '느림', '권장'],
            ['bcrypt', '가변', '안전', '매우 느림', '패스워드 권장']
          ]
        },
        quiz: [
          { q: 'Hash는 양방향 암호화이다', a: false },
          { q: 'MD5는 현재 안전하게 사용할 수 있다', a: false },
          { q: 'Salt는 패스워드마다 다르게 생성해야 한다', a: true },
          { q: 'bcrypt는 패스워드 저장에 적합하다', a: true }
        ]
      }
    }
  },
  '정보보안 관리 및 법규': {
    color: 'bg-orange-500',
    topics: {
      'ISMS / ISMS-P': {
        concept: 'ISMS(정보보호 관리체계)는 조직의 정보자산을 체계적으로 보호하기 위한 관리 시스템입니다. ISMS-P는 정보보호와 개인정보보호를 통합한 인증제도입니다.',
        keywords: ['ISMS', 'ISMS-P', 'PDCA', 'ISO 27001', '위험관리', '인증심사', '사후관리'],
        mustKnow: [
          { text: 'ISMS: 정보보호 관리체계, 기업의 정보자산 보호', highlight: true },
          { text: 'ISMS-P: 정보보호 + 개인정보보호 통합 인증', highlight: true },
          { text: 'PDCA 사이클: Plan(계획) → Do(실행) → Check(검토) → Act(개선), 지속적 개선', highlight: true },
          { text: 'ISMS 인증 단계: ① 인증 신청 ② 심사 준비 ③ 현장 심사 ④ 인증위원회 ⑤ 인증서 발급', highlight: false },
          { text: '인증 유효기간: 3년, 매년 사후관리 심사', highlight: true },
          { text: '인증 대상: 정보통신서비스 제공자 중 일정 규모 이상 (의무)', highlight: false },
          { text: 'ISO 27001: 국제 표준, ISMS와 유사, 전세계 인정', highlight: false },
          { text: 'ISO 27002: 보안 통제 가이드라인, 114개 통제항목', highlight: false },
          { text: '위험관리: 위험 식별 → 분석 → 평가 → 처리(수용/감소/전가/회피)', highlight: true },
          { text: '자산 분류: 정보자산, 소프트웨어, 하드웨어, 인적자산, 물리적 환경, 서비스', highlight: false }
        ],
        tips: [
          '🎯 PDCA 암기: "계(Plan) 실(Do) 검(Check) 개(Act)"',
          '💡 ISMS는 정보보호만, ISMS-P는 개인정보보호 추가',
          '🔥 3년마다 갱신, 매년 사후관리 - 시험 단골 문제',
          '🎯 위험 처리: 수용(받아들임), 감소(대책), 전가(보험), 회피(중단)',
          '💡 ISO 27001은 국제 표준 = 해외 진출 기업에 유리'
        ],
        comparison: {
          title: 'ISMS vs ISMS-P',
          headers: ['구분', 'ISMS', 'ISMS-P'],
          rows: [
            ['범위', '정보보호', '정보보호 + 개인정보보호'],
            ['인증기관', '과기정통부·방통위', '과기정통부·방통위'],
            ['유효기간', '3년', '3년'],
            ['사후관리', '매년', '매년'],
            ['통제항목', '80개', '102개 (정보보호80+개인정보22)']
          ]
        },
        quiz: [
          { q: 'ISMS 인증은 3년마다 갱신한다', a: true },
          { q: 'ISO 27001은 국내 표준이다', a: false },
          { q: 'PDCA는 지속적 개선 사이클이다', a: true },
          { q: 'ISMS-P는 정보보호와 개인정보보호를 통합한 인증이다', a: true }
        ]
      },
      '개인정보보호법': {
        concept: '개인정보보호법은 개인정보의 수집, 이용, 제공 등을 규율하는 법률입니다. 정보주체의 권리를 보장하고 개인정보처리자의 의무를 규정합니다.',
        keywords: ['개인정보', '정보주체', '개인정보처리자', '동의', '가명정보', '익명정보', '민감정보', '고유식별정보'],
        mustKnow: [
          { text: '개인정보: 살아있는 개인을 식별할 수 있는 정보', highlight: true },
          { text: '정보주체: 개인정보의 주인 (본인)', highlight: false },
          { text: '개인정보처리자: 개인정보를 처리하는 자 (기업, 기관 등)', highlight: false },
          { text: '정보주체 권리: ① 열람 ② 정정 ③ 삭제 ④ 처리정지 요구권', highlight: true },
          { text: '수집 시 동의: 목적, 항목, 보유기간 등 명시 후 동의', highlight: true },
          { text: '민감정보: 사상/신념, 노동조합, 정치, 건강, 성생활 등 → 별도 동의', highlight: true },
          { text: '고유식별정보: 주민번호, 운전면허번호, 여권번호 → 별도 동의', highlight: true },
          { text: '가명정보: 추가 정보 없이는 특정 개인 식별 불가, 통계/연구 목적 활용 가능', highlight: true },
          { text: '익명정보: 완전히 식별 불가능, 개인정보 아님, 자유 활용', highlight: false },
          { text: '개인정보 유출 통지: 유출 인지 후 5일 이내 정보주체에게 통지', highlight: true },
          { text: '과징금: 매출액의 3% 이하, 5억원 한도', highlight: true },
          { text: '과태료: 최대 5천만원', highlight: false },
          { text: '안전조치 의무: 암호화, 접근통제, 접속기록 보관(1년), 백업', highlight: true },
          { text: '개인정보처리방침: 공개 의무, 변경 시 7일 전 공지', highlight: false }
        ],
        tips: [
          '🎯 유출 통지: "5일 이내" - 매우 자주 출제!',
          '💡 가명 vs 익명: 가명은 추가 정보로 식별 가능, 익명은 완전 불가능',
          '🔥 민감정보, 고유식별정보는 별도 동의 필수!',
          '🎯 과징금 3%, 5억원 한도 암기',
          '💡 주민번호 수집은 원칙적 금지, 법령에 명시된 경우만 가능'
        ],
        comparison: {
          title: '가명정보 vs 익명정보',
          headers: ['구분', '가명정보', '익명정보'],
          rows: [
            ['식별 가능성', '추가 정보로 가능', '불가능'],
            ['개인정보 해당', 'O', 'X'],
            ['활용 목적', '통계, 연구, 공익적 기록', '제한 없음'],
            ['결합', '가능 (안전지대)', '해당 없음'],
            ['재식별 금지', 'O', '해당 없음']
          ]
        },
        quiz: [
          { q: '개인정보 유출 시 5일 이내 통지해야 한다', a: true },
          { q: '가명정보는 어떤 목적으로도 사용할 수 없다', a: false },
          { q: '정보주체는 열람을 요구할 권리가 있다', a: true },
          { q: '과징금은 매출액의 3% 이하이다', a: true }
        ]
      },
      '정보통신망법': {
        concept: '정보통신망 이용촉진 및 정보보호 등에 관한 법률로, 정보통신망의 이용과 정보보호를 규율합니다.',
        keywords: ['본인확인', '스팸', '불법정보', '임시조치', '침해사고', '개인정보 보호'],
        mustKnow: [
          { text: '본인확인기관: 방송통신위원회 지정, 실명 확인', highlight: true },
          { text: '영리목적 광고성 정보: 사전 동의 필요, 거부 의사 표시 방법 제공', highlight: true },
          { text: '제목란 표시: "[광고]" 또는 "광고" 명시', highlight: false },
          { text: '수신 거부: 쉽게 거부할 수 있는 방법 제공', highlight: false },
          { text: '불법정보: 음란물, 명예훼손 등 → 임시조치, 삭제 가능', highlight: true },
          { text: '임시조치: 30일간 게시 중단, 명예훼손 등 분쟁 시', highlight: false },
          { text: '침해사고 통지: 이용자에게 24시간 이내 통지', highlight: true },
          { text: '침해사고 신고: 한국인터넷진흥원(KISA)에 신고', highlight: false },
          { text: '개인정보 유효기간: 1년간 미이용 시 파기 또는 별도 저장', highlight: true },
          { text: '과태료: 3천만원 이하', highlight: false }
        ],
        tips: [
          '🎯 침해사고 통지: "24시간 이내" (개인정보보호법은 5일)',
          '💡 광고는 사전 동의 + [광고] 표시 + 거부 방법 제공',
          '🔥 본인확인기관은 방통위 지정 (과기정통부 아님!)',
          '🎯 1년 미이용 개인정보는 파기 또는 분리 저장',
          '💡 임시조치는 30일간, 법원 판결 시까지 게시 중단'
        ],
        quiz: [
          { q: '침해사고는 24시간 이내 통지해야 한다', a: true },
          { q: '광고성 정보는 사전 동의 없이 전송 가능하다', a: false },
          { q: '본인확인기관은 과기정통부가 지정한다', a: false },
          { q: '1년간 미이용 개인정보는 파기하거나 분리 저장해야 한다', a: true }
        ]
      }
    }
  }
};