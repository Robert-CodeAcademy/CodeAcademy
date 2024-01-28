<!-- resources/views/people/index.blade.php -->



<?php $__env->startSection('content'); ?>
    <h1>People List</h1>
    <a href="<?php echo e(route('people.create')); ?>" class="btn btn-primary mb-3">Add Person</a>
    <table class="table">
        <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <!-- <th>Email</th> -->
                <th>Phone Number</th>
                <!-- <th>City</th> -->
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <?php $__currentLoopData = $people; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $person): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <tr>
                    <td><?php echo e($person->first_name); ?></td>
                    <td><?php echo e($person->last_name); ?></td>
                    <!-- <td><?php echo e($person->email); ?></td> -->
                    <td><?php echo e($person->phone_number); ?></td>
                    <!-- <td><?php echo e($person->city); ?></td> -->
                    <td>
                        <a href="<?php echo e(route('people.show', $person->id)); ?>" class="btn btn-info">View</a>
                        <a href="<?php echo e(route('people.edit', $person->id)); ?>" class="btn btn-primary">Edit</a>
                        <form action="<?php echo e(route('people.destroy', $person->id)); ?>" method="POST" style="display: inline;">
                            <?php echo csrf_field(); ?>
                            <?php echo method_field('DELETE'); ?>
                            <button type="submit" class="btn btn-danger" onclick="return confirm('Are you sure you want to delete this person?')">Delete</button>
                        </form>
                    </td>
                </tr>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </tbody>
    </table>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\xampp\htdocs\robert_crud_project\resources\views/people/index.blade.php ENDPATH**/ ?>