// ============ 成员列表数据 (共9人, 把姓名/头衔/头像/链接换成真实的) ============
//   name:  姓名
//   role:  头衔 (Professor / Ph.D. Student / M.S. Student / Undergraduate ...)
//   image: 头像路径, 建议正方形, 放在 img/team/ 下
//   additionalInfo: 附加说明 (可留空 "")
//   links: 社交链接, 不需要的键直接删掉即可
//          可用: website, scholar, twitter, github, linkedin

const teamMembers = [
    {
        name: "Prof. Member 1",
        role: "Professor",
        image: "img/team/member1.svg",
        additionalInfo: "",
        links: {
            website: "https://example.com",
            scholar: "https://scholar.google.com/",
            github: "https://github.com/"
        }
    },
    {
        name: "Member 2",
        role: "Ph.D. Student",
        image: "img/team/member2.svg",
        additionalInfo: "",
        links: { linkedin: "https://www.linkedin.com/" }
    },
    {
        name: "Member 3",
        role: "Ph.D. Student",
        image: "img/team/member3.svg",
        additionalInfo: "",
        links: { linkedin: "https://www.linkedin.com/" }
    },
    {
        name: "Member 4",
        role: "Ph.D. Student",
        image: "img/team/member4.svg",
        additionalInfo: "",
        links: { github: "https://github.com/" }
    },
    {
        name: "Member 5",
        role: "M.S. Student",
        image: "img/team/member5.svg",
        additionalInfo: "",
        links: { linkedin: "https://www.linkedin.com/" }
    },
    {
        name: "Member 6",
        role: "M.S. Student",
        image: "img/team/member6.svg",
        additionalInfo: "",
        links: { website: "https://example.com" }
    },
    {
        name: "Member 7",
        role: "M.S. Student",
        image: "img/team/member7.svg",
        additionalInfo: "",
        links: { linkedin: "https://www.linkedin.com/" }
    },
    {
        name: "Member 8",
        role: "Undergraduate",
        image: "img/team/member8.svg",
        additionalInfo: "",
        links: { github: "https://github.com/" }
    },
    {
        name: "Member 9",
        role: "Undergraduate",
        image: "img/team/member9.svg",
        additionalInfo: "",
        links: { linkedin: "https://www.linkedin.com/" }
    }
];
