import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import Layout from '@/component/layout/Layout'
import TeamDetailSection from '@/component/team/TeamDetailSection'
import { teamData } from '@/data/Data'
import ErrorSection from '@/component/error/ErrorSection'

export const metadata = {
    title: 'Team | Kits4Kids',
    description: 'Team Kits4Kids',
}

// This function generates the static paths for all slugs
export async function generateStaticParams() {
    const slugs = teamData.map((item) => item.slug)
    return slugs.map((slug) => ({
        slug: slug,
    }))
}

export default function TeamDetails({ params }) {
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
