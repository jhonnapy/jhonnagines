import Stack from '@/_components/layouts/stack';
import React, { FunctionComponent } from 'react';
import ProjectImage from '../common/project-image';
import ProjectTitle from '../common/project-title';
import AppModal, { AppModalProps } from '@/_components/common/app-modal';

export type ProjectDetailsModalProps = {
  // no props
} & Omit<AppModalProps, 'children'>;

const ProjectDetailsModal: FunctionComponent<ProjectDetailsModalProps> = ({
  ...props
}) => {
  return (
    <AppModal {...props}>
      <Stack className='items-center space-y-8 p-16'>
        <Stack className='text-center space-y-4'>
          <h2 className='text-slate-500'>project overview</h2>
          <ProjectImage />
        </Stack>
        <ProjectTitle>Floor Planner and Reservation</ProjectTitle>
        <p>
          A Floor Planner with Seat Reservation app is a versatile mobile and
          web-based application that caters to diverse needs, including planning
          and organizing seating arrangements for events, venues, parking lots,
          hotels, and other spaces. The app seamlessly combines the capabilities
          of a floor planner and a seat reservation system, making it an
          indispensable tool for event organizers, hospitality industry
          professionals, and facility managers. Key features of the app include:
          Flexible Floor Planning Tools: The app provides an intuitive and
          user-friendly interface with flexible floor planning tools. Users can
          create customized seating layouts for events such as weddings,
          conferences, theaters, classrooms, and more. Additionally, the app
          allows for planning parking lot layouts and room seating arrangements
          in hotels or conference centers. Seat Customization: Users have the
          ability to define the number of seats, table shapes, and other
          elements, ensuring a tailored seating arrangement that meets the
          specific requirements of each event or space. Seat Reservation System:
          The app offers a robust seat reservation system that enables attendees
          or guests to view the seating plan and reserve their preferred seats
          or parking spots in advance. This feature is especially valuable for
          events and venues with limited capacity or designated seating.
          Real-Time Updates: The app ensures real-time updates, automatically
          reflecting any changes made to the seating plan or parking layout. As
          seats or parking spaces are reserved, the app instantly updates the
          availability status. Integration with Ticketing Systems: For ticketed
          events, the app seamlessly integrates with ticketing platforms,
          allowing attendees to select their seats during the ticket purchase
          process. Accessibility Considerations: The app incorporates
          accessibility features to cater to diverse needs. Users can reserve
          wheelchair-accessible seating or view information about facilities for
          individuals with mobility challenges. Collaboration and Sharing: Event
          organizers, facility managers, and other stakeholders can collaborate
          within the app, allowing them to view and edit the seating or parking
          layouts simultaneously. The app also facilitates easy sharing of plans
          with clients or team members for approval. Data Analytics and
          Reporting: The app offers comprehensive data analytics and reporting
          capabilities. Users can track seat reservations, monitor attendance,
          and gather insights into event occupancy or parking utilization.
          Notifications and Reminders: Users and attendees receive timely
          notifications and reminders about seat reservations, upcoming events,
          or parking arrangements. Versatile Applications: Beyond events and
          venues, the {`app's`} versatility extends to parking lots and hotels,
          allowing for efficient management of parking spaces and room seating.
          In conclusion, the Floor Planner with Seat Reservation app serves as
          an all-in-one solution for planning and managing seating arrangements
          across various settings, providing convenience, efficiency, and
          enhanced experiences for both organizers and attendees.
        </p>

        <button>
          <span className='text-slate-500 text-sm'>back to top</span>
        </button>
      </Stack>
    </AppModal>
  );
};

export default ProjectDetailsModal;
