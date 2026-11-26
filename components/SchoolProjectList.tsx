import ProjectGrid from './ProjectGrid';

/** Streams in separately from the rest of the school page. */
export default async function SchoolProjectList() {
  return <ProjectGrid type="school" />;
}
