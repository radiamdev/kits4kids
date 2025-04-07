import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import Layout from '@/component/layout/Layout'
import TeamDetailSection from '@/component/team/TeamDetailSection'
import { teamData } from '@/data/Data'
export const metadata = {
    title: 'Team | Kits4Kids',
    description: 'Team Kits4Kids',
}
export default async function TeamDetails(props) {
    const params = await props.params
    const { slug } = params
    const teamDesc = teamData.find((item) => item.slug === slug)
    return (
        <Layout>
            <BreadcrumbSection header="Team Details" title="Team Details" />
            {teamDesc ? (
                <TeamDetailSection teamInfo={teamDesc} />
            ) : (
                <ErrorSection type="Team Member" />
            )}
        </Layout>
    )
}
