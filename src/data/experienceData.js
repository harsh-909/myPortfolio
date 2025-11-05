import unicommerceIcon from '../assets/images/unicommerce.jpeg';
import faplIcon  from '../assets/images/fapl.jpeg';
import NineTechIcon from '../assets/images/909.jpeg';

const companies = [{
        CompanyName: '909 Technologies Pvt Ltd', CompanyIcon: NineTechIcon, Date: 'Feb, 2024 - Present', Designation: 'Software Engineer',
        isTechDetailsAvailable: true, tech_stacks: [{ name: 'Software Eng', stacks: 'Jmix , SpringBoot, Elastic Search, AWS, Vaadin' },
        { name: 'Database', stacks: 'MySql, Postgres' },
        { name: 'Others', stacks: 'Jira, Confluence, Documentation' }
        ]
    },
    
{
    CompanyName: 'Future Algorithm Pvt Ltd', CompanyIcon: faplIcon, Date: 'July, 2023 - Jan, 2024', Designation: 'Software Developer',
    isTechDetailsAvailable: true, tech_stacks: [{ name: 'Software Dev', stacks: 'Intellitrack(Spring Framework), Spring, Java, JavaScript, Jquery' },
    { name: 'Database', stacks: 'MySql, Postgres' },
    { name: 'Others', stacks: 'Jira, Confluence, Documentation' }
    ]
},

{
    CompanyName: 'Unicommerce Pvt. Ltd.', CompanyIcon: unicommerceIcon, Date: 'Jan, 2023 - June, 2023', Designation: 'Quality Assurance Engineer',
    isTechDetailsAvailable: true, tech_stacks: [{ name: 'Quality Assurance Engineer', stacks: 'Java, SpringBoot, Kafka, Kubernates, Grafana' },
    { name: 'Testing', stacks: 'Postman, TestNg, Junit, Python Script, Selenium' },
    { name: 'Database', stacks: 'MySql, MongoDB' },
    { name: 'Others', stacks: 'Jira, Confluence, Documentation' }
    ]
}]

export default companies;