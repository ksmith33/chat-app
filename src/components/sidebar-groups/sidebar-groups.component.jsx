import SidebarGroup from "../sidebar-group/sidebar-group.component"

function SidebarGroups({ groups }){
	return (
		<div className="sidebar-groups-container">
			{
				groups && groups.map((group) => {
					return <SidebarGroup group={ group } key={group.id}/>
				})
			}		
		</div>
	)
}

export default SidebarGroups;