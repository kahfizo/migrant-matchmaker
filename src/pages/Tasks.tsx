import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { AppHeader } from "@/components/layout/AppHeader";
import { useNavigation } from "@/contexts/NavigationContext";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { Button } from "@/components/ui/button";
import { Plus, MoreVertical } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Task } from "@/database/schema/task";

const initialTasks: Task[] = [
  {
    id: "1",
    title: "Review CPMI Documents",
    description: "Check all required documents for completeness",
    cpmi_id: "cpmi-1",
    assigned_to: "user-1",
    status: "todo",
    due_date: "2024-03-20",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Schedule Interview",
    description: "Arrange interview with potential employer",
    cpmi_id: "cpmi-2",
    assigned_to: "user-2",
    status: "on_process",
    due_date: "2024-03-22",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

const Tasks = () => {
  const { mode } = useNavigation();
  const { toast } = useToast();
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const columns = [
    { id: "todo", title: "To Do" },
    { id: "on_process", title: "On Process" },
    { id: "review", title: "Review" },
    { id: "done", title: "Done" },
  ];

  const onDragEnd = (result: any) => {
    if (!result.destination) return;

    const { source, destination } = result;
    
    // If dropped in the same position
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    // Find the task that was dragged
    const task = tasks.find((t) => t.id === result.draggableId);
    if (!task) return;

    // Create new array without the dragged task
    const newTasks = tasks.filter((t) => t.id !== result.draggableId);

    // Update task status based on the destination column
    const updatedTask = {
      ...task,
      status: destination.droppableId as Task["status"],
      updated_at: new Date().toISOString(),
    };

    // Insert task at the new position
    newTasks.splice(destination.index, 0, updatedTask);
    
    setTasks(newTasks);
    
    toast({
      title: "Task Updated",
      description: `Task "${task.title}" moved to ${columns.find(col => col.id === destination.droppableId)?.title}`,
    });

    console.log("Task updated:", {
      taskId: task.id,
      newStatus: destination.droppableId,
      newIndex: destination.index,
    });
  };

  const TaskCard = ({ task, index }: { task: Task; index: number }) => (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="mb-2"
        >
          <Card className="bg-card hover:bg-accent/50 transition-colors">
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium">{task.title}</h3>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                {task.description}
              </p>
              <div className="flex justify-between items-center text-xs text-muted-foreground">
                <span>Due: {new Date(task.due_date).toLocaleDateString()}</span>
                <span>ID: {task.cpmi_id}</span>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </Draggable>
  );

  const content = (
    <main className="flex-1 p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Task Board</h1>
          <p className="text-muted-foreground mt-1">
            Monitor recruitment progress
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Button>
            <Plus className="mr-2" />
            Add Task
          </Button>
          {mode === "sidebar" && <SidebarTrigger />}
        </div>
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {columns.map((column) => (
            <Card key={column.id} className="bg-background">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">
                  {column.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-2">
                <Droppable droppableId={column.id}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className="min-h-[200px]"
                    >
                      {tasks
                        .filter((task) => task.status === column.id)
                        .map((task, index) => (
                          <TaskCard key={task.id} task={task} index={index} />
                        ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </CardContent>
            </Card>
          ))}
        </div>
      </DragDropContext>
    </main>
  );

  if (mode === "header") {
    return (
      <div className="min-h-screen flex flex-col w-full">
        <AppHeader />
        {content}
      </div>
    );
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        {content}
      </div>
    </SidebarProvider>
  );
};

export default Tasks;